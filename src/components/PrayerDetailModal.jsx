import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './PrayerDetailModal.css';

const PrayerDetailModal = ({ prayer, onClose }) => {
    if (!prayer) return null;

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Prevent body scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="prayer-modal-overlay" onClick={onClose}>
            <div className="prayer-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="prayer-modal-close" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <div className="prayer-modal-header">
                    <h2 className="prayer-modal-title">{prayer.title}</h2>
                    <span className="prayer-modal-date">{prayer.createdAt}</span>
                </div>

                <div className="prayer-modal-body markdown-content">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {prayer.content || '*내용이 없습니다.*'}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default PrayerDetailModal;
