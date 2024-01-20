import { useAtom } from 'jotai';
import { eventsAtom } from '../store';
import { IEvent } from '../types';

const useEvents = () => {
  const [events, setEvents] = useAtom(eventsAtom);

  const addEvent = (newEvent: IEvent) => {
    setEvents([...events, { ...newEvent, id: Date.now().toString() }]);
  };

  const updateEvent = (updatedEvent: IEvent) => {
    setEvents(events.map(event => event.id === updatedEvent.id ? updatedEvent : event));
  };

  const deleteEvent = (eventId: string) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  return { events, addEvent, updateEvent, deleteEvent };
};

export default useEvents;