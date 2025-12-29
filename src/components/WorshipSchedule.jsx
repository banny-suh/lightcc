import React from 'react';
import './WorshipSchedule.css';

const WorshipSchedule = () => {
    return (
        <section className="worship-schedule">
            <div className="container">
                <div className="worship-header">
                    <span className="worship-label">WORSHIP SERVICE</span>
                    <h2 className="worship-title">예배 안내</h2>
                </div>

                <div className="schedule-compact-container">
                    {/* Sunday Row */}
                    <div className="schedule-row">
                        <div className="row-label">
                            <span className="day-en">SUNDAY</span>
                            <span className="day-kr">주일예배</span>
                        </div>
                        <div className="row-items">
                            <div className="service-card">
                                <span className="service-time">09:00</span>
                                <span className="service-name">1부 예배</span>
                            </div>
                            <div className="service-card highlight">
                                <span className="service-time">11:00</span>
                                <span className="service-name">2부 예배</span>
                            </div>
                            <div className="service-card">
                                <span className="service-time">14:00</span>
                                <span className="service-name">3부 예배</span>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="schedule-divider-horizontal"></div>

                    {/* Weekday Row */}
                    <div className="schedule-row">
                        <div className="row-label">
                            <span className="day-en">WEEKDAY</span>
                            <span className="day-kr">주중예배</span>
                        </div>
                        <div className="row-items">
                            <div className="service-card">
                                <span className="service-time">06:00</span>
                                <span className="service-name">새벽예배</span>
                            </div>
                            <div className="service-card">
                                <span className="service-time">10:30</span>
                                <span className="service-name">수요오전예배</span>
                            </div>
                            <div className="service-card">
                                <span className="service-time">20:00</span>
                                <span className="service-name">금밤기도회</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorshipSchedule;
