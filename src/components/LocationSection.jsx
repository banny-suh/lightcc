import React from 'react';
import { FaSubway } from 'react-icons/fa';
import './LocationSection.css';

const LocationSection = () => {
    // Naver Map Embed URL (example - replace with actual coordinates)
    const naverMapUrl = "https://map.naver.com/v5/entry/place/1234567890?c=15,0,0,0,dh";

    return (
        <section className="location-section">
            <div className="location-container">
                <h2 className="location-title">오시는 길</h2>
                <div className="location-divider"></div>

                <h3 className="location-church-name">빛의교회</h3>
                <p className="location-address">서울특별시 서초구 서초대로 115</p>

                <div className="location-transport">
                    <div className="transport-icon">
                        <FaSubway />
                    </div>
                    <span className="transport-text">지하철 7호선 내방역 4번 출구</span>
                </div>

                {/* Map Container */}
                <div className="map-container">
                    {/* Option 1: Using Naver Map iframe (requires actual location URL) */}
                    {/* <iframe 
            className="naver-map-iframe"
            src={naverMapUrl}
            title="빛의교회 위치"
            allowFullScreen
          ></iframe> */}

                    {/* Option 2: Placeholder until actual map is configured */}
                    <div className="map-placeholder">
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ marginBottom: '10px' }}>네이버 지도</p>
                            <p style={{ fontSize: '0.85rem', color: '#aaa' }}>
                                실제 운영 시 네이버 지도 API를 연동하여<br />
                                정확한 위치를 표시합니다.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="contact-info">
                    <div className="contact-item">
                        <span className="contact-label">Tel</span>
                        <div className="contact-value">02-532-9826</div>
                    </div>

                    <div className="contact-item">
                        <span className="contact-label">Fax</span>
                        <div className="contact-value">02-533-9826</div>
                    </div>

                    <div className="contact-item">
                        <span className="contact-label">Email</span>
                        <div className="contact-value">lightcc@kakao.com</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
