import type { NextPage } from 'next';
import EventList from '../components/EventList';
import AdminControls from '../components/AdminControls';

const Home: NextPage = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <AdminControls />
      <EventList />
    </div>
  );
};

export default Home;