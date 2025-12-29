import React from 'react';
import ChurchCalendar from '../../components/ChurchCalendar';

const ChurchSchedule = () => {
    const scheduleData = [
        { id: 1, title: '온가족 새날 기도회', date: '2025-12-06', type: 'prayer' },
        { id: 2, title: '창립 14주년 감사예배', date: '2025-12-07', type: 'special' },
        { id: 3, title: '성탄절', date: '2025-12-25', type: 'holiday' },
        { id: 4, title: '송구영신예배', date: '2025-12-31', type: 'special' }
    ];

    return (
        <div className="schedule-container">
            <ChurchCalendar events={scheduleData} />
        </div>
    );
};

export default ChurchSchedule;
