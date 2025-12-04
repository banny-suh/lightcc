import React from 'react';
import './WorshipSchedule.css';

const WorshipSchedule = () => {
    return (
        <section className="worship-schedule">
            <div className="worship-schedule__container">
                <div className="schedule-box">
                    <div className="schedule-content">
                        <span className="schedule-item"><strong>주일1부예배</strong> 오전 9:00</span>
                        <span className="divider">|</span>
                        <span className="schedule-item"><strong>주일2부예배</strong> 오전 11:00</span>
                        <span className="divider">|</span>
                        <span className="schedule-item"><strong>주일3부예배</strong> 오후 2:00</span>
                    </div>
                </div>

                <div className="schedule-box">
                    <div className="schedule-content">
                        <span className="schedule-item"><strong>새벽예배</strong> 오전 6:00</span>
                        <span className="divider">|</span>
                        <span className="schedule-item"><strong>수요오전예배</strong> 오전 10:30</span>
                        <span className="divider">|</span>
                        <span className="schedule-item"><strong>금밤기도회</strong> 오후 8:00</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorshipSchedule;
