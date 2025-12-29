import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiFileText, FiBook, FiImage } from 'react-icons/fi';
import './Admin.css';

// --- MOCK DATA GENERATION ---
const generateMockData = () => {
    const bulletins = Array.from({ length: 45 }, (_, i) => ({
        id: i + 1,
        date: `2024-03-${String(31 - (i % 30)).padStart(2, '0')}`,
        title: `2024년 3월 ${i % 5 + 1}주차 주보`,
        fileName: `bulletin_202403_${i}.pdf`,
    })).reverse();

    const prayers = Array.from({ length: 30 }, (_, i) => ({
        id: i + 1,
        date: `2024-02-${String(28 - (i % 28)).padStart(2, '0')}`,
        title: `2024년 2월 주일 대표기도 - 김철수 장로`,
        content: '하나님 아버지 은혜에 감사드립니다...',
    })).reverse();

    const posters = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        title: `2024 여름 행사 ${i + 1}`,
        date: '2024-07-20',
        fileName: `poster_summer_${i}.jpg`,
    })).reverse();

    return { bulletins, prayers, posters };
};

const { bulletins: initialBulletins, prayers: initialPrayers, posters: initialPosters } = generateMockData();

// --- COMPONENTS ---

// 1. Pagination Component
const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (totalPages <= 1) return null;

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    // Limit visible pages for simplicity (showing first 10 max or simplified)
    // For this example, let's just show all or slice
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

// 2. Edit Modal Component
const EditModal = ({ isOpen, onClose, type, item, onSave, onDelete }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState(item || {});
    const [previewPage, setPreviewPage] = useState(0);

    // Initialize form data when item changes
    useEffect(() => {
        setFormData(item || {});
        setPreviewPage(0);
    }, [item]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">{item ? `${type} 수정` : `새 ${type} 등록`}</h2>
                    <button className="modal-close" onClick={onClose}>&times;</button>
                </div>

                <div className="modal-body">
                    {/* Dynamic Fields based on Type */}
                    {(type === '주보' || type === '기도문') && (
                        <div className="form-group">
                            <label className="form-label">날짜</label>
                            <input
                                type="date"
                                name="date"
                                className="form-input"
                                value={formData.date || ''}
                                onChange={handleChange}
                            />
                            {formData.date && (
                                <div style={{ marginTop: '8px', fontSize: '0.9rem', color: '#166534', fontWeight: '600' }}>
                                    {(() => {
                                        const [y, m, d] = formData.date.split('-');
                                        const dateObj = new Date(y, m - 1, d);
                                        return dateObj.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
                                    })()}
                                </div>
                            )}
                        </div>
                    )}

                    <div className="form-group">
                        <label className="form-label">제목</label>
                        <input
                            type="text"
                            name="title"
                            className="form-input"
                            value={formData.title || ''}
                            onChange={handleChange}
                        />
                    </div>

                    {type === '기도문' && (
                        <div className="form-group">
                            <label className="form-label">내용</label>
                            <textarea
                                name="content"
                                className="form-textarea"
                                value={formData.content || ''}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    )}

                    {(type === '주보' || type === '행사 포스터') && (
                        <div className="form-group">
                            <label className="form-label">파일첨부</label>

                            {/* Preview Area */}
                            {formData.files && formData.files.length > 0 ? (
                                <div className="file-preview-container" style={{ marginTop: '10px' }}>
                                    {/* Navigation for multiple files (Bulletin) */}
                                    {type === '주보' && (
                                        <div className="preview-navigation" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                                            <button
                                                onClick={() => setPreviewPage(prev => Math.max(0, prev - 1))}
                                                disabled={previewPage === 0}
                                                style={{ padding: '5px 10px', cursor: 'pointer' }}
                                            >
                                                &lt;
                                            </button>
                                            <span>{previewPage + 1} / {formData.files.length}</span>
                                            <button
                                                onClick={() => setPreviewPage(prev => Math.min(formData.files.length - 1, prev + 1))}
                                                disabled={previewPage === formData.files.length - 1}
                                                style={{ padding: '5px 10px', cursor: 'pointer' }}
                                            >
                                                &gt;
                                            </button>
                                        </div>
                                    )}

                                    {/* Image Preview */}
                                    <div style={{ border: '1px solid #e2e8f0', padding: '10px', textAlign: 'center', background: '#f8fafc' }}>
                                        <div style={{ marginBottom: '8px', color: '#64748b', fontSize: '0.9rem' }}>
                                            {formData.files[type === '주보' ? previewPage : 0].name || formData.fileName}
                                        </div>
                                        {/* Mock Image Display - In real app, use URL.createObjectURL(file) */}
                                        <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e2e8f0', color: '#94a3b8' }}>
                                            [이미지 미리보기: {formData.files[type === '주보' ? previewPage : 0].name}]
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div style={{ padding: '10px', background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '4px' }}>
                                    {formData.fileName ? formData.fileName : '파일 선택 안됨'}
                                </div>
                            )}

                            {/* File Input */}
                            <input
                                type="file"
                                multiple={type === '주보'}
                                style={{ marginTop: '10px' }}
                            />
                        </div>
                    )}
                </div>

                <div className="modal-actions">
                    {item ? (
                        <button className="btn-delete" onClick={() => onDelete(item.id)}>삭제하기</button>
                    ) : (
                        <div></div>
                    )}
                    <button className="btn-save" onClick={() => onSave(formData)}>저장하기</button>
                </div>
            </div>
        </div>
    );
};

// --- MAIN ADMIN COMPONENT ---
const Admin = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('bulletin');

    // Data States
    const [bulletins, setBulletins] = useState(initialBulletins);
    const [prayers, setPrayers] = useState(initialPrayers);
    const [posters, setPosters] = useState(initialPosters);

    // View States
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Modal States
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null); // null for create, object for edit

    // Reset pagination when tab changes
    useEffect(() => {
        setCurrentPage(1);
        setSearchQuery('');
    }, [activeTab]);

    // --- Helpers ---
    const getData = () => {
        switch (activeTab) {
            case 'bulletin': return bulletins;
            case 'prayer': return prayers;
            case 'poster': return posters;
            default: return [];
        }
    };

    const getTabLabel = () => {
        switch (activeTab) {
            case 'bulletin': return '주보';
            case 'prayer': return '오늘의 기도';
            case 'poster': return '행사 포스터';
            default: return '';
        }
    };

    // --- Logic ---
    const filteredData = getData().filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleCreate = () => {
        setSelectedItem(null);
        setIsModalOpen(true);
    };

    const handleEdit = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleSave = (newData) => {
        const timestamp = new Date().getTime();
        const updatedItem = { ...newData, id: newData.id || timestamp }; // Generate ID if new

        if (activeTab === 'bulletin') {
            setBulletins(prev => newData.id ? prev.map(i => i.id === newData.id ? updatedItem : i) : [updatedItem, ...prev]);
        } else if (activeTab === 'prayer') {
            setPrayers(prev => newData.id ? prev.map(i => i.id === newData.id ? updatedItem : i) : [updatedItem, ...prev]);
        } else if (activeTab === 'poster') {
            setPosters(prev => newData.id ? prev.map(i => i.id === newData.id ? updatedItem : i) : [updatedItem, ...prev]);
        }
        setIsModalOpen(false);
        alert('저장되었습니다.');
    };

    const handleDelete = (id) => {
        if (!window.confirm('정말 삭제하시겠습니까?')) return;

        if (activeTab === 'bulletin') {
            setBulletins(prev => prev.filter(i => i.id !== id));
        } else if (activeTab === 'prayer') {
            setPrayers(prev => prev.filter(i => i.id !== id));
        } else if (activeTab === 'poster') {
            setPosters(prev => prev.filter(i => i.id !== id));
        }
        setIsModalOpen(false);
        alert('삭제되었습니다.');
    };




    const menuItems = [
        { id: 'bulletin', label: '주보 관리', icon: <FiFileText /> },
        { id: 'prayer', label: '오늘의 기도 관리', icon: <FiBook /> },
        { id: 'poster', label: '행사 포스터 관리', icon: <FiImage /> },
    ];

    return (
        <div className="admin-wrapper">
            {/* Sidebar */}
            <div className="admin-sidebar">
                <div className="sidebar-home-btn" onClick={() => navigate('/')}>
                    <FiHome className="sidebar-icon" /> 홈으로 이동
                </div>
                <div className="admin-menu-title">ADMIN MENU</div>
                <ul className="admin-menu-list">
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            className={`admin-menu-item ${activeTab === item.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(item.id)}
                        >
                            <span className="menu-icon">{item.icon}</span>
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div className="admin-content">
                <div className="admin-header">
                    <div>
                        <h1 className="admin-title">ADMIN DASHBOARD</h1>
                        <p className="admin-subtitle">빛의교회 관리자 페이지</p>
                    </div>
                </div>

                {/* Controls */}
                <div className="admin-controls">
                    <div className="search-bar">
                        <input
                            type="text"
                            className="search-input"
                            placeholder={`${getTabLabel()} 검색...`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button className="create-btn" onClick={handleCreate}>+ {getTabLabel()} 등록</button>
                </div>

                {/* Data Table */}
                <div className="data-table-container">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th style={{ width: '60px' }}>No.</th>
                                <th>제목</th>
                                {activeTab !== 'poster' && <th>날짜</th>}
                                {activeTab === 'bulletin' && <th>첨부파일</th>}
                                <th style={{ width: '80px', textAlign: 'center' }}>상태</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.length > 0 ? (
                                paginatedData.map((item) => (
                                    <tr key={item.id} onClick={() => handleEdit(item)}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        {activeTab !== 'poster' && <td>{item.date}</td>}
                                        {activeTab === 'bulletin' && <td>{item.fileName}</td>}
                                        <td style={{ textAlign: 'center' }}><span className="status-badge status-active">게시중</span></td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: 'center', padding: '40px' }}>데이터가 없습니다.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <Pagination
                    totalItems={filteredData.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />

                {/* Modal */}
                <EditModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    type={getTabLabel()}
                    item={selectedItem}
                    onSave={handleSave}
                    onDelete={handleDelete}
                />
            </div>
        </div>
    );
};

export default Admin;
