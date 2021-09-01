import React from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import './Calendar.css';

const todayStr = new Date().toISOString().replace(/T.*$/, '');

const INITIAL_EVENTS = [
  {
    title: 'All-day event',
    start: todayStr,
  },
  {
    title: 'Timed event',
    start: todayStr + 'T12:00:00',
    end: todayStr + 'T14:00:00',
  },
];

const Calendar = () => (
  <>
    <FullCalendar
      schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
      plugins={[resourceTimeGridPlugin]}
      initialEvents={INITIAL_EVENTS}
    />
  </>
);

export default Calendar;
