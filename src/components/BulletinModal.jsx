import React, { useState, useEffect } from 'react';
import './BulletinModal.css';

const BulletinModal = ({ bulletin, onClose }) => {
    const [currentPage, setCurrentPage] = useState(0);

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

    const goToPrevPage = () => {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : bulletin.pages.length - 1));
    };

    const goToNextPage = () => {
        setCurrentPage((prev) => (prev < bulletin.pages.length - 1 ? prev + 1 : 0));
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowLeft') goToPrevPage();
            if (e.key === 'ArrowRight') goToNextPage();
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentPage]);

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

                {/* Header */}
                <div className="bulletin-modal-header">
                    <h2 className="bulletin-modal-title">{bulletin.title}</h2>
                    <p className="bulletin-modal-page-info">
                        {currentPage + 1} / {bulletin.pages.length}
                    </p>
                </div>

                {/* Image container */}
                <div className="bulletin-modal-image-container">
                    <img
                        src={bulletin.pages[currentPage]}
                        alt={`${bulletin.title} - Page ${currentPage + 1}`}
                        className="bulletin-modal-image"
                    />
                </div>

                {/* Navigation arrows */}
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
