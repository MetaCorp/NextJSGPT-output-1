import React from 'react';
import { IEvent } from '../types';
import Link from 'next/link';
import useEvents from '../hooks/useEvents';

interface EventCardProps {
  event: IEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { deleteEvent } = useEvents();

  const handleDelete = (e: any) => {
    e.preventDefault(); // To prevent navigation
    deleteEvent(event.id);
  };

  return (
    <div className='p-4 text-white border rounded-lg shadow-md cursor-pointer bg-gradient-to-r from-blue-500 to-teal-500'>
      <h3 className='text-lg font-bold'>{event.title}</h3>
      <p className='text-sm'>{event.description}</p>
      <p className='mt-2 text-sm'>{event.date}</p>
      <div className='flex justify-end mt-4 space-x-3'>
        <Link className='px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700' href={`/events/${event.id}/edit`}>
          Edit
        </Link>
        <button onClick={handleDelete} className='px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-700'>Delete</button>
      </div>
    </div>
  );
};

export default EventCard;