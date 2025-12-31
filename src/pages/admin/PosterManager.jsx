import React, { useState, useEffect } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy, serverTimestamp, where, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { uploadFile, deleteFile } from '../../utils/uploadUtils';
import { formatDate, formatDateForInput, parseDate } from '../../utils/dateUtils';
import { FiUploadCloud } from 'react-icons/fi';
import '../Admin.css';

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

const PosterModal = ({ isOpen, onClose, item, onSave, onDelete, isSaving }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({});
    const [selectedFile, setSelectedFile] = useState(null);
    const [existingFile, setExistingFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    useEffect(() => {
        if (item) {
            setFormData(item);
            setExistingFile(item.url ? { url: item.url, name: item.fileName } : null);
            setPreviewUrl(item.url || null);
        } else {
            setFormData({ createdAt: new Date() });
            setExistingFile(null);
            setPreviewUrl(null);
        }
        setSelectedFile(null);
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
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmit = () => {
        if (!formData.title) {
            alert('제목을 입력해주세요.');
            return;
        }
        onSave(formData, selectedFile);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-header-left">
                        <h2 className="modal-title">{item ? '포스터 수정' : '새 포스터 등록'}</h2>
                    </div>
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
                        <label className="form-label">작성일</label>
                        <input
                            type="datetime-local"
                            name="createdAt"
                            className="form-input"
                            value={formatDateForInput(formData.createdAt)}
                            onChange={handleChange}
                            disabled={isSaving}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">이미지 파일</label>
                        {previewUrl ? (
                            <div className="file-preview-container" style={{ marginTop: '10px' }}>
                                <div style={{ border: '1px solid #e2e8f0', padding: '10px', textAlign: 'center', background: '#f8fafc' }}>
                                    <div style={{ marginBottom: '8px', color: '#64748b', fontSize: '0.9rem' }}>
                                        {selectedFile ? selectedFile.name : (existingFile?.name || '기존 파일')}
                                        {selectedFile && <span style={{ color: 'red', marginLeft: '5px' }}>(새 파일)</span>}
                                    </div>
                                    <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', overflow: 'hidden' }}>
                                        <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div style={{ padding: '20px', background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '4px', textAlign: 'center', color: '#64748b' }}>
                                첨부된 파일이 없습니다.
                            </div>
                        )}
                        <div className="upload-zone-wrapper" style={{ marginTop: '15px' }}>
                            <label className="upload-zone">
                                <input
                                    type="file"
                                    onChange={handleFileSelect}
                                    disabled={isSaving}
                                    className="hidden-file-input"
                                    accept="image/*"
                                />
                                <div className="upload-zone-content">
                                    <FiUploadCloud className="upload-icon" />
                                    <div className="upload-text">
                                        <span className="upload-highlight">새 포스터 이미지를 선택하거나 드래그하세요</span>
                                        <span className="upload-subtext">행사 홍보에 사용될 선명한 이미지 파일을 권장합니다</span>
                                    </div>
                                    <p className="upload-hint">JPG, PNG 파일 지원 (최대 10MB)</p>
                                </div>
                            </label>
                        </div>
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

const PosterManager = () => {
    const [posters, setPosters] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const itemsPerPage = 10;

    useEffect(() => {
        const q = query(
            collection(db, 'posters'),
            where('deletedAt', '==', null),
            orderBy('createdAt', 'desc')
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setPosters(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }, (error) => console.error(error));
        return () => unsubscribe();
    }, []);

    const handleCreate = () => { setSelectedItem(null); setIsModalOpen(true); };
    const handleEdit = (item) => { setSelectedItem(item); setIsModalOpen(true); };

    const handleSave = async (formData, newFile) => {
        setIsSaving(true);
        try {
            let updatedData = { ...formData };
            if (updatedData.id) delete updatedData.id;

            if (newFile) {
                // Soft delete rule: We don't physically delete even old versions when updating
                const uploaded = await uploadFile(newFile, 'posters');
                updatedData.url = uploaded.url;
                updatedData.fileName = uploaded.name;
                updatedData.storagePath = uploaded.path;
            }

            if (updatedData.createdAt) {
                const dateObj = parseDate(updatedData.createdAt) || new Date();
                updatedData.createdAt = Timestamp.fromDate(dateObj);
            } else if (!selectedItem) {
                updatedData.createdAt = serverTimestamp();
            }

            if (!selectedItem) {
                updatedData.deletedAt = null; // Initialize soft-delete field as null
            }
            updatedData.updatedAt = serverTimestamp();

            if (selectedItem) {
                await updateDoc(doc(db, 'posters', selectedItem.id), updatedData);
            } else {
                await addDoc(collection(db, 'posters'), updatedData);
            }
            setIsModalOpen(false);
            alert('저장되었습니다.');
        } catch (error) {
            console.error(error);
            alert('Error: ' + error.message);
        } finally {
            setIsSaving(false);
        }
    };

    const handleDelete = async (id, item) => {
        if (!window.confirm('삭제하시겠습니까?')) return;
        setIsSaving(true);
        try {
            // 1. Storage Physical Delete (if exists)
            const fileToDelete = item.storagePath || item.url;
            if (fileToDelete && (fileToDelete.includes('firebasestorage') || !fileToDelete.startsWith('http'))) {
                await deleteFile(fileToDelete);
            }

            // 2. Firestore Soft Delete: update deletedAt field
            await updateDoc(doc(db, 'posters', id), {
                deletedAt: serverTimestamp()
            });
            setIsModalOpen(false);
            alert('삭제되었습니다.');
        } catch (error) {
            console.error(error);
            alert('Error deleting');
        } finally {
            setIsSaving(false);
        }
    };

    const filteredData = posters.filter(p => p.title?.toLowerCase().includes(searchQuery.toLowerCase()));
    const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div>
            <div className="admin-header">
                <div><h1 className="admin-title">행사 포스터 관리</h1><p className="admin-subtitle">교회 주요 행사 포스터를 업로드합니다.</p></div>
            </div>
            <div className="admin-controls">
                <div className="search-bar">
                    <input type="text" className="search-input" placeholder="포스터 검색..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                <button className="create-btn" onClick={handleCreate}>+ 포스터 등록</button>
            </div>
            <div className="data-table-container">
                <table className="admin-table">
                    <thead><tr><th>제목</th><th>날짜</th><th>파일명</th><th style={{ width: '80px', textAlign: 'center' }}>상태</th></tr></thead>
                    <tbody>
                        {paginatedData.length > 0 ? paginatedData.map(item => (
                            <tr key={item.id} onClick={() => handleEdit(item)}>
                                <td>{item.title}</td>
                                <td>{formatDate(item.createdAt)}</td>
                                <td>{item.fileName}</td>
                                <td style={{ textAlign: 'center' }}><span className="status-badge status-active">게시중</span></td>
                            </tr>
                        )) : <tr><td colSpan="4" style={{ textAlign: 'center', padding: '40px' }}>데이터가 없습니다.</td></tr>}
                    </tbody>
                </table>
            </div>
            <Pagination totalItems={filteredData.length} itemsPerPage={itemsPerPage} currentPage={currentPage} onPageChange={setCurrentPage} />
            <PosterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} item={selectedItem} onSave={handleSave} onDelete={handleDelete} isSaving={isSaving} />
        </div>
    );
};

export default PosterManager;
