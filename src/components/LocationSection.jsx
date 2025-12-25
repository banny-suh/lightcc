import { FaSubway, FaPhoneAlt, FaFax, FaEnvelope } from 'react-icons/fa';
import './LocationSection.css';

const LocationSection = () => {
    // Naver Map Embed URL (example - replace with actual coordinates)
    const naverMapUrl = "https://map.naver.com/v5/entry/place/1234567890?c=15,0,0,0,dh";

    return (
        <section className="location-section">
            <div className="location-container">
                <h2 className="location-title">오시는 길</h2>
                <div className="location-divider"></div>

                <div className="location-header">
                    <h3 className="location-church-name">빛의교회</h3>
                    <p className="location-address">서울특별시 서초구 서초대로 115</p>

                    <div className="location-transport">
                        <div className="transport-icon">
                            <FaSubway />
                        </div>
                        <span className="transport-text">지하철 7호선 내방역 4번 출구</span>
                    </div>
                </div>

                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1400.8755329229275!2d126.99281620950927!3d37.4872634611186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1a7ae0bdbd1%3A0x549f69045eae91d1!2z67mb7J2Y6rWQ7ZqM!5e0!3m2!1sko!2skr!4v1766662321554!5m2!1sko!2skr"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="빛의교회 위치"
                    ></iframe>
                </div>

                {/* Contact Information */}
                <div className="contact-info">
                    <div className="contact-item">
                        <div className="contact-icon">
                            <FaPhoneAlt />
                        </div>
                        <div className="contact-content">
                            <span className="contact-label">Tel</span>
                            <div className="contact-value">02-532-9826</div>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">
                            <FaFax />
                        </div>
                        <div className="contact-content">
                            <span className="contact-label">Fax</span>
                            <div className="contact-value">02-533-9826</div>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">
                            <FaEnvelope />
                        </div>
                        <div className="contact-content">
                            <span className="contact-label">Email</span>
                            <div className="contact-value">lightcc@kakao.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
