import React from 'react';
import { IEvent } from '../types';

interface EventDetailsProps {
  event: IEvent;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>{event.date}</p>
    </div>
  );
};

export default EventDetails;