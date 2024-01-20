import { useRouter } from 'next/router';
import EventDetails from '../../components/EventDetails';
import { useAtom } from 'jotai';
import { eventsAtom } from '../../store';
import AdminControls from '../../components/AdminControls';

const EventPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [events] = useAtom(eventsAtom);
  const event = events.find((event) => event.id === id);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <AdminControls event={event} />
      {event ? <EventDetails event={event} /> : <p>Event not found</p>}
    </div>
  );
};

export default EventPage;