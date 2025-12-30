import React, { useState, useEffect } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
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

const NewsModal = ({ isOpen, onClose, item, onSave, onDelete, isSaving }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({});

    useEffect(() => {
        setFormData(item || {});
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

    const handleSubmit = () => {
        if (!formData.title || !formData.date) {
            alert('제목과 날짜를 입력해주세요.');
            return;
        }
        onSave(formData);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">{item ? '소식 수정' : '새 소식 등록'}</h2>
                    <button className="modal-close" onClick={onClose} disabled={isSaving}>&times;</button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label className="form-label">날짜</label>
                        <input
                            type="date"
                            name="date"
                            className="form-input"
                            value={formData.date || ''}
                            onChange={handleChange}
                            disabled={isSaving}
                        />
                        {formData.date && (
                            <div style={{ marginTop: '8px', fontSize: '0.9rem', color: '#166534', fontWeight: '600' }}>
                                {(() => {
                                    try {
                                        const [y, m, d] = formData.date.split('-');
                                        const dateObj = new Date(y, m - 1, d);
                                        return dateObj.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
                                    } catch (e) { return ''; }
                                })()}
                            </div>
                        )}
                    </div>
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
                        <label className="form-label">기도 내용</label>
                        <textarea
                            name="content"
                            className="form-textarea"
                            value={formData.content || ''}
                            onChange={handleChange}
                            disabled={isSaving}
                            placeholder="기도문 내용을 입력하세요..."
                        ></textarea>
                    </div>
                </div>
                <div className="modal-actions">
                    {item ? <button className="btn-delete" onClick={() => onDelete(item.id)} disabled={isSaving}>삭제하기</button> : <div></div>}
                    <button className="btn-save" onClick={handleSubmit} disabled={isSaving}>{isSaving ? '저장 중...' : '저장하기'}</button>
                </div>
            </div>
        </div>
    );
};

const NewsManager = () => {
    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const itemsPerPage = 10;

    useEffect(() => {
        const q = query(collection(db, 'news'), orderBy('date', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setNews(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }, (error) => console.error(error));
        return () => unsubscribe();
    }, []);

    const handleCreate = () => { setSelectedItem(null); setIsModalOpen(true); };
    const handleEdit = (item) => { setSelectedItem(item); setIsModalOpen(true); };

    const handleSave = async (formData) => {
        setIsSaving(true);
        try {
            let updatedData = { ...formData };
            if (updatedData.id) delete updatedData.id;

            if (!selectedItem) updatedData.createdAt = serverTimestamp();
            updatedData.updatedAt = serverTimestamp();

            if (selectedItem) {
                await updateDoc(doc(db, 'news', selectedItem.id), updatedData);
            } else {
                await addDoc(collection(db, 'news'), updatedData);
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

    const handleDelete = async (id) => {
        if (!window.confirm('삭제하시겠습니까?')) return;
        setIsSaving(true);
        try {
            await deleteDoc(doc(db, 'news', id));
            setIsModalOpen(false);
            alert('삭제되었습니다.');
        } catch (error) {
            console.error(error);
            alert('Error deleting');
        } finally {
            setIsSaving(false);
        }
    };

    const filteredData = news.filter(p => p.title?.toLowerCase().includes(searchQuery.toLowerCase()));
    const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Helper to safely format date
    const formatDate = (dateValue) => {
        if (!dateValue) return '-';
        if (dateValue.toDate) return dateValue.toDate().toLocaleDateString('ko-KR');
        if (dateValue.seconds) return new Date(dateValue.seconds * 1000).toLocaleDateString('ko-KR');
        return dateValue;
    };

    return (
        <div>
            <div className="admin-header">
                <div><h1 className="admin-title">소식 관리</h1><p className="admin-subtitle">매주 소식을 기록하고 관리합니다.</p></div>
            </div>
            <div className="admin-controls">
                <div className="search-bar">
                    <input type="text" className="search-input" placeholder="소식 검색..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                <button className="create-btn" onClick={handleCreate}>+ 소식 등록</button>
            </div>
            <div className="data-table-container">
                <table className="admin-table">
                    <thead><tr><th>제목</th><th>날짜</th><th style={{ width: '80px', textAlign: 'center' }}>상태</th></tr></thead>
                    <tbody>
                        {paginatedData.length > 0 ? paginatedData.map(item => (
                            <tr key={item.id} onClick={() => handleEdit(item)}>
                                <td>{item.title}</td>
                                <td>{formatDate(item.date)}</td>
                                <td style={{ textAlign: 'center' }}><span className="status-badge status-active">게시중</span></td>
                            </tr>
                        )) : <tr><td colSpan="3" style={{ textAlign: 'center', padding: '40px' }}>데이터가 없습니다.</td></tr>}
                    </tbody>
                </table>
            </div>
            <Pagination totalItems={filteredData.length} itemsPerPage={itemsPerPage} currentPage={currentPage} onPageChange={setCurrentPage} />
            <NewsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} item={selectedItem} onSave={handleSave} onDelete={handleDelete} isSaving={isSaving} />
        </div>
    );
};

export default NewsManager;
