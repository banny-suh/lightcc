import React from 'react';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
    return (
        <div className="home-page">
            <HeroSlider />

            <section className="home-content-section" style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: '#fff' }}>
                <div className="container">
                    <h2>환영합니다</h2>
                    <p style={{ marginTop: '20px', fontSize: '1.2rem', color: '#666', lineHeight: '1.8' }}>
                        빛의교회 홈페이지에 오신 것을 환영합니다.<br />
                        이곳은 하나님의 사랑과 은혜가 넘치는 공간입니다.<br />
                        앞으로 다양한 소식과 은혜로운 콘텐츠로 채워질 예정입니다.
                    </p>
                    <div style={{ height: '400px', marginTop: '50px', background: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
                        <p style={{ color: '#aaa' }}>추가 콘텐츠 영역 (예: 예배 안내, 오시는 길, 새가족 등록 등)</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

