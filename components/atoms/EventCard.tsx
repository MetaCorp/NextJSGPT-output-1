import React from 'react';
import { IEvent } from '../../types';
import Link from 'next/link';
import useEvents from '../../hooks/useEvents';
import Button from './../atoms/Button';

interface EventCardProps {
  event: IEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { deleteEvent } = useEvents();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // To prevent navigation
    deleteEvent(event.id);
  };

  return (
    <Link href={`/events/${event.id}`}>
      <div className='p-4 text-white border rounded-lg shadow-md cursor-pointer bg-gradient-to-r from-blue-500 to-teal-500'>
        <h3 className='text-lg font-bold'>{event.title}</h3>
        <p className='text-sm'>{event.description}</p>
        <p className='mt-2 text-sm'>{event.date}</p>
        <div className='flex justify-end mt-4 space-x-3'>
          <Link href={`/events/${event.id}/edit`}>
            <Button className='px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700'>Edit</Button>
          </Link>
          <Button onClick={handleDelete} className='px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-700'>Delete</Button>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;