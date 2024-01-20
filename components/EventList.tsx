import React from 'react';
import EventCard from './atoms/EventCard';
import useEvents from '../hooks/useEvents';
import Link from 'next/link';
import Button from './atoms/Button';

const EventList = () => {
  const { events } = useEvents();

  return (
    <div>
      <div className='flex items-center justify-between my-8'>
        <h1 className='text-3xl font-semibold'>Upcoming Events</h1>
        <Link href='/events/add'>
          <Button className='px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700'>Add New Event</Button>
        </Link>
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;