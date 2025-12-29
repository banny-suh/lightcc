import React, { useState } from 'react';
import './HomeContent.css';

const activities = [
    `${import.meta.env.BASE_URL}images/activity1.png`,
    `${import.meta.env.BASE_URL}images/activity2.png`,
    `${import.meta.env.BASE_URL}images/activity3.png`,
    `${import.meta.env.BASE_URL}images/activity4.png`,
    `${import.meta.env.BASE_URL}images/activity5.png`,
    `${import.meta.env.BASE_URL}images/activity1.png`, // Repeat for infinite scroll illusion if needed, or just extra items
];

const HomeContent = () => {
    return (
        <section className="home-content">
            <div className="container">
                <div className="content-wrapper">
                    <div className="content-header">
                        <span className="sub-title">LIGHT COMMUNITY CHURCH</span>
                        <h2 className="main-title">
                            <span className="text-row">하나님의 사랑으로</span>
                            <span className="text-row highlight">세상을 밝히는 교회</span>
                        </h2>
                        <div className="title-divider"></div>
                    </div>

                    <div className="content-body">
                        <p className="main-description">
                            하나님은 우리를 교회로 부르셨고<br />
                            교회를 통해서 일하십니다.
                        </p>
                        <p className="sub-description">
                            교회를 통해서 영혼을 살리고 복음을 전하며<br />
                            하나님의 나라를 확장해 나가는 것,<br />
                            그것이 바로 교회의 거룩한 꿈입니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContent;
