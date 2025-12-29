import React from 'react';

const PlaceholderTab = ({ tabName }) => {
    return (
        <div className="news-list-container">
            <div className="news-empty" style={{ padding: '120px 20px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#333' }}>
                    {tabName}
                </h3>
                <p>준비 중입니다.</p>
            </div>
        </div>
    );
};

export default PlaceholderTab;
