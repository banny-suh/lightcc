import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './ChurchPrayer.css';

const ChurchPrayer = ({ currentPage, itemsPerPage }) => {
    const [prayers, setPrayers] = useState([]);
    const [selectedPrayer, setSelectedPrayer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPrayers = async () => {
            try {
                const q = query(collection(db, 'prayers'), orderBy('date', 'desc'));
                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setPrayers(data);
                if (data.length > 0) {
                    setSelectedPrayer(data[0]);
                }
            } catch (error) {
                console.error("Error fetching prayers:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPrayers();
    }, []);

    if (loading) {
        return <div className="news-empty"><p>로딩 중...</p></div>;
    }

    if (prayers.length === 0) {
        return <div className="news-empty"><p>등록된 기도문이 없습니다.</p></div>;
    }

    return (
        <div className="church-prayer-container">
            <div className="prayer-sidebar">
                <h3 className="sidebar-title">기도문 목록</h3>
                <ul className="prayer-list">
                    {prayers.map(prayer => (
                        <li
                            key={prayer.id}
                            className={`prayer-item ${selectedPrayer?.id === prayer.id ? 'active' : ''}`}
                            onClick={() => setSelectedPrayer(prayer)}
                        >
                            <span className="prayer-item-title">{prayer.title}</span>
                            <span className="prayer-item-date">{prayer.date}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="prayer-content-area">
                {selectedPrayer ? (
                    <div className="prayer-detail">
                        <div className="prayer-detail-header">
                            <h2 className="prayer-detail-title">{selectedPrayer.title}</h2>
                            <span className="prayer-detail-date">{selectedPrayer.date}</span>
                        </div>
                        <div className="prayer-detail-body markdown-content">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {selectedPrayer.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                ) : (
                    <div className="prayer-placeholder">
                        <p>기도문을 선택해주세요.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChurchPrayer;
