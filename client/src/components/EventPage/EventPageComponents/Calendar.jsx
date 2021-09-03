import React from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { useSelector } from 'react-redux';
import Server from '../../../lib/Server';
import './Calendar.css';

const todayStr = new Date().toISOString().replace(/T.*$/, '');
const INITIAL_EVENTS = [
  {
    events: [
      {
        title: 'All-day event',
        start: todayStr,
      },
      {
        title: 'Timed event',
        start: todayStr + 'T12:00:00',
        end: todayStr + 'T14:00:00',
      },
    ],
    color: 'blue',
  },
  {
    events: [
      // put the array in the `events` property
      {
        title: 'event1',
        start: todayStr + 'T14:00:00',
      },
      {
        title: 'event2',
        start: todayStr + 'T18:00:00',
        end: todayStr + 'T20:00:00',
      },
    ],
    color: 'black', // an option!
  },
];

const Calendar = () => {
  const userId = useSelector((state) => (state.user ? state.user.user_id : 1));
  Server.get(`/trips/${userId}`).then((response) => {
    console.log(response.data);
  });

  return (
    <>
      <FullCalendar
        schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
        plugins={[resourceTimeGridPlugin]}
        // initialEvents={INITIAL_EVENTS}
        eventSources={INITIAL_EVENTS}
      />
    </>
  );
};

export default Calendar;
