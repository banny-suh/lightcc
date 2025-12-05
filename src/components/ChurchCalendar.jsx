import React, { useMemo } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { ko } from 'date-fns/locale/ko';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './ChurchCalendar.css';

const locales = {
    'ko': ko,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const ChurchCalendar = ({ events }) => {
    // Transform events to be compatible with react-big-calendar
    // Assuming events have { date: 'YYYY-MM-DD', title: '...', type: '...' }
    const calendarEvents = useMemo(() => {
        return events.map(event => {
            const dateParts = event.date.split('-');
            const year = parseInt(dateParts[0], 10);
            const month = parseInt(dateParts[1], 10) - 1;
            const day = parseInt(dateParts[2], 10);
            const startDate = new Date(year, month, day);
            const endDate = new Date(year, month, day); // Same day for now

            return {
                ...event,
                start: startDate,
                end: endDate,
                allDay: true,
                resource: event.type
            };
        });
    }, [events]);

    const eventPropGetter = (event) => {
        let className = 'rbc-event-default';
        if (event.type === 'holiday') className = 'rbc-event-holiday';
        if (event.type === 'special') className = 'rbc-event-special';
        if (event.type === 'prayer') className = 'rbc-event-prayer';

        return { className };
    };

    return (
        <div className="church-calendar-wrapper">
            <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600 }}
                culture="ko"
                views={['month', 'week', 'day']}
                defaultView="month"
                eventPropGetter={eventPropGetter}
                messages={{
                    next: "다음",
                    previous: "이전",
                    today: "오늘",
                    month: "월",
                    week: "주",
                    day: "일",
                    date: "날짜",
                    time: "시간",
                    event: "일정",
                    noEventsInRange: "일정이 없습니다."
                }}
            />
        </div>
    );
};

export default ChurchCalendar;
