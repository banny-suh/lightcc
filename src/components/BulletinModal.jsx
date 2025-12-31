import React, { useState, useEffect } from 'react';
import './BulletinModal.css';

const BulletinModal = ({ bulletins, initialIndex, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [currentPage, setCurrentPage] = useState(0);

    const bulletin = bulletins[currentIndex];

    // Reset page to 0 when switching bulletin
    useEffect(() => {
        setCurrentPage(0);
    }, [currentIndex]);

    // Close modal on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const goToPrevPage = (e) => {
        e.stopPropagation();
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : bulletin.pages.length - 1));
    };

    const goToNextPage = (e) => {
        e.stopPropagation();
        setCurrentPage((prev) => (prev < bulletin.pages.length - 1 ? prev + 1 : 0));
    };

    const goToPrevBulletin = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : bulletins.length - 1));
    };

    const goToNextBulletin = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev < bulletins.length - 1 ? prev + 1 : 0));
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowLeft') goToPrevPage(e);
            if (e.key === 'ArrowRight') goToNextPage(e);
            if (e.key === '[') goToPrevBulletin(e);
            if (e.key === ']') goToNextBulletin(e);
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentPage, currentIndex]);

    if (!bulletin) return null;

    return (
        <div className="bulletin-modal-overlay" onClick={onClose}>
            <div className="bulletin-modal-content" onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button className="bulletin-modal-close" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {/* Bulletin Navigation (Top) */}
                <div className="bulletin-navigation-header">
                    <button className="bulletin-nav-btn" onClick={goToPrevBulletin}>
                        &laquo; 이전 주보
                    </button>
                    <span className="bulletin-date-info">
                        {bulletin.title}
                    </span>
                    <button className="bulletin-nav-btn" onClick={goToNextBulletin}>
                        다음 주보 &raquo;
                    </button>
                </div>

                {/* Header (Page info) */}
                <div className="bulletin-modal-header">
                    <p className="bulletin-modal-page-info">
                        {currentPage + 1} / {bulletin.pages.length}
                    </p>
                </div>

                {/* Image container */}
                <div className="bulletin-modal-image-container">
                    {bulletin.pages.map((url, idx) => (
                        <img
                            key={`${currentIndex}-${idx}`}
                            src={url}
                            alt={`${bulletin.title} - Page ${idx + 1}`}
                            className="bulletin-modal-image"
                            style={{ display: idx === currentPage ? 'block' : 'none' }}
                        />
                    ))}
                </div>

                {/* Page Navigation arrows */}
                <button
                    className="bulletin-modal-arrow bulletin-modal-arrow-left"
                    onClick={goToPrevPage}
                    aria-label="Previous page"
                >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                <button
                    className="bulletin-modal-arrow bulletin-modal-arrow-right"
                    onClick={goToNextPage}
                    aria-label="Next page"
                >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>

                {/* Page indicators */}
                <div className="bulletin-modal-indicators">
                    {bulletin.pages.map((_, index) => (
                        <button
                            key={index}
                            className={`bulletin-modal-indicator ${index === currentPage ? 'active' : ''}`}
                            onClick={() => setCurrentPage(index)}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BulletinModal;
