import React from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { useSelector } from 'react-redux';
import './Calendar.css';

const INITIAL_EVENTS = [];

const Calendar = () => {
  const activities = useSelector((state) => state.activities);

  const userEvents = { events: [], color: 'black' };

  activities.forEach((activity) => {
    if (activity.start_time) {
      userEvents.events.push({
        title: activity.title,
        start: activity.start_time,
        end: activity.end_time,
      });
    }
  });
  // INITIAL_EVENTS.push(userEvents);
  // console.log('user Events', userEvents);

  return (
    <>
      {console.log('user_events', userEvents)}
      <FullCalendar
        schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
        plugins={[resourceTimeGridPlugin]}
        // initialEvents={INITIAL_EVENTS}
        // eventSources={INITIAL_EVENTS}
        events={userEvents.events}
      />
    </>
  );
};

export default Calendar;
