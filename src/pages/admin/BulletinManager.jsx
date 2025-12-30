import React, { useState, useEffect } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy, serverTimestamp, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { uploadMultipleFiles, deleteFile } from '../../utils/uploadUtils';
import '../Admin.css';

// Pagination Helper (can be extracted if reused)
const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (totalPages === 0) return null;
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    return (
        <div className="pagination">
            {pages.map(page => (
                <button
                    key={page}
                    className={`page-btn ${currentPage === page ? 'active' : ''}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

// Bulletin Modal
const BulletinModal = ({ isOpen, onClose, item, onSave, onDelete, isSaving }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({});
    const [previewPage, setPreviewPage] = useState(0);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [existingFiles, setExistingFiles] = useState([]);

    useEffect(() => {
        if (item) {
            setFormData(item);
            // Handle legacy structure: fileUrl/fileName vs files array
            if (item.files) {
                setExistingFiles(item.files);
            } else if (item.fileUrl) {
                setExistingFiles([{ url: item.fileUrl, name: item.fileName, path: item.storagePath }]);
            } else {
                setExistingFiles([]);
            }
        } else {
            setFormData({});
            setExistingFiles([]);
        }
        setSelectedFiles([]);
        setPreviewPage(0);
    }, [item, isOpen]);

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileSelect = (e) => {
        if (e.target.files) {
            setSelectedFiles(Array.from(e.target.files));
            setPreviewPage(0);
        }
    };

    const handleSubmit = () => {
        if (!formData.title) {
            alert('제목을 입력해주세요.');
            return;
        }
        onSave(formData, selectedFiles);
    };

    // Preview Logic
    const previewItems = [
        ...existingFiles,
        ...selectedFiles.map(file => ({ name: file.name, isNew: true }))
    ];

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">{item ? '주보 수정' : '새 주보 등록'}</h2>
                    <button className="modal-close" onClick={onClose} disabled={isSaving}>&times;</button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label className="form-label">제목</label>
                        <input
                            type="text"
                            name="title"
                            className="form-input"
                            value={formData.title || ''}
                            onChange={handleChange}
                            disabled={isSaving}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">파일첨부 (여러 장 가능)</label>
                        {previewItems.length > 0 ? (
                            <div className="file-preview-container" style={{ marginTop: '10px' }}>
                                {previewItems.length > 1 && (
                                    <div className="preview-navigation" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                                        <button type="button" onClick={() => setPreviewPage(prev => Math.max(0, prev - 1))} disabled={previewPage === 0}>&lt;</button>
                                        <span>{previewPage + 1} / {previewItems.length}</span>
                                        <button type="button" onClick={() => setPreviewPage(prev => Math.min(previewItems.length - 1, prev + 1))} disabled={previewPage === previewItems.length - 1}>&gt;</button>
                                    </div>
                                )}
                                <div style={{ border: '1px solid #e2e8f0', padding: '10px', textAlign: 'center', background: '#f8fafc' }}>
                                    <div style={{ marginBottom: '8px', color: '#64748b', fontSize: '0.9rem' }}>
                                        {previewItems[previewPage]?.name}
                                        {previewItems[previewPage]?.isNew && <span style={{ color: 'red', marginLeft: '5px' }}>(새 파일)</span>}
                                    </div>
                                    <div style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e2e8f0', color: '#94a3b8' }}>
                                        📄 주보 미리보기
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div style={{ padding: '10px', background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '4px' }}>파일 없음</div>
                        )}
                        <input type="file" multiple onChange={handleFileSelect} disabled={isSaving} style={{ marginTop: '10px' }} />
                    </div>
                </div>
                <div className="modal-actions">
                    {item ? <button className="btn-delete" onClick={() => onDelete(item.id, item)} disabled={isSaving}>삭제하기</button> : <div></div>}
                    <button className="btn-save" onClick={handleSubmit} disabled={isSaving}>{isSaving ? '저장 중...' : '저장하기'}</button>
                </div>
            </div>
        </div>
    );
};

const BulletinManager = () => {
    const [bulletins, setBulletins] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const itemsPerPage = 10;

    useEffect(() => {
        const q = query(
            collection(db, 'bulletins'),
            where('deletedAt', '==', null),
            orderBy('createdAt', 'desc')
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setBulletins(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }, (error) => console.error("Error fetching bulletins:", error));
        return () => unsubscribe();
    }, []);

    const handleCreate = () => { setSelectedItem(null); setIsModalOpen(true); };
    const handleEdit = (item) => { setSelectedItem(item); setIsModalOpen(true); };

    const handleSave = async (formData, newFiles) => {
        setIsSaving(true);
        try {
            let updatedData = { ...formData };
            if (updatedData.id) delete updatedData.id;
            if (newFiles && newFiles.length > 0) {
                const uploaded = await uploadMultipleFiles(newFiles, 'bulletins');
                const newFileMeta = uploaded.map(f => ({ url: f.url, name: f.name, path: f.path }));
                const existing = selectedItem?.files || [];
                updatedData.files = [...existing, ...newFileMeta];
                updatedData.fileName = `${updatedData.files.length} pages`;
            } else if (!selectedItem) {
                // Creating new without files?
                updatedData.files = [];
                updatedData.fileName = '0 pages';
            }

            if (!selectedItem) {
                updatedData.createdAt = serverTimestamp();
                updatedData.deletedAt = null; // Initialize soft-delete field as null
            }
            updatedData.updatedAt = serverTimestamp();

            if (selectedItem) {
                await updateDoc(doc(db, 'bulletins', selectedItem.id), updatedData);
            } else {
                await addDoc(collection(db, 'bulletins'), updatedData);
            }
            setIsModalOpen(false);
            alert('주보가 저장되었습니다.');
        } catch (error) {
            console.error(error);
            alert('저장 실패: ' + error.message);
        } finally {
            setIsSaving(false);
        }
    };

    const handleDelete = async (id, item) => {
        if (!window.confirm('삭제하시겠습니까?')) return;
        setIsSaving(true);
        try {
            // Soft delete: update deletedAt field instead of physical deletion
            await updateDoc(doc(db, 'bulletins', id), {
                deletedAt: serverTimestamp()
            });
            setIsModalOpen(false);
            alert('삭제되었습니다.');
        } catch (error) {
            console.error(error);
            alert('삭제 실패');
        } finally {
            setIsSaving(false);
        }
    };

    const filteredData = bulletins.filter(b => b.title?.toLowerCase().includes(searchQuery.toLowerCase()));
    const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Helper to safely format date (handles String or Firestore Timestamp)
    const formatDate = (dateValue) => {
        if (!dateValue) return '-';
        if (dateValue.toDate) return dateValue.toDate().toLocaleDateString('ko-KR'); // Firestore Timestamp
        if (dateValue.seconds) return new Date(dateValue.seconds * 1000).toLocaleDateString('ko-KR'); // Raw object
        return dateValue; // Assume string
    };

    return (
        <div>
            <div className="admin-header">
                <div><h1 className="admin-title">주보 관리</h1><p className="admin-subtitle">매주 주보를 등록하고 관리합니다.</p></div>
            </div>
            <div className="admin-controls">
                <div className="search-bar">
                    <input type="text" className="search-input" placeholder="주보 검색..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                <button className="create-btn" onClick={handleCreate}>+ 주보 등록</button>
            </div>
            <div className="data-table-container">
                <table className="admin-table">
                    <thead><tr><th>제목</th><th>날짜</th><th>첨부파일</th><th style={{ width: '80px', textAlign: 'center' }}>상태</th></tr></thead>
                    <tbody>
                        {paginatedData.length > 0 ? paginatedData.map(item => (
                            <tr key={item.id} onClick={() => handleEdit(item)}>
                                <td>{item.title}</td>
                                <td>{formatDate(item.createdAt)}</td>
                                <td>{item.fileName || (item.files ? `${item.files.length} pages` : '-')}</td>
                                <td style={{ textAlign: 'center' }}><span className="status-badge status-active">게시중</span></td>
                            </tr>
                        )) : <tr><td colSpan="4" style={{ textAlign: 'center', padding: '40px' }}>데이터가 없습니다.</td></tr>}
                    </tbody>
                </table>
            </div>
            <Pagination totalItems={filteredData.length} itemsPerPage={itemsPerPage} currentPage={currentPage} onPageChange={setCurrentPage} />
            <BulletinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} item={selectedItem} onSave={handleSave} onDelete={handleDelete} isSaving={isSaving} />
        </div>
    );
};

export default BulletinManager;
