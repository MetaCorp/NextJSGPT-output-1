import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useEvents from '../../../hooks/useEvents';
import { IEvent } from '../../../types';

const EditEventPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { events, updateEvent } = useEvents();
  const eventToEdit = events.find((event) => event.id === id);
  const { register, handleSubmit, reset } = useForm<IEvent>({ defaultValues: eventToEdit });

  useEffect(() => {
    if (eventToEdit) {
      reset(eventToEdit);
    }
  }, [eventToEdit, reset]);

  const onSubmit = (data: IEvent) => {
    updateEvent({ ...data, id: id as string });
    router.push('/');
  };

  // Prevent the form from being displayed if there is no event to edit
  if (!eventToEdit) return <p>Loading...</p>;

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-2xl font-bold my-6'>Edit Event</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label htmlFor='title' className='block text-gray-700 text-sm font-bold mb-2'>Title</label>
          <input id='title' {...register('title')} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' required />
        </div>
        <div className='mb-4'>
          <label htmlFor='description' className='block text-gray-700 text-sm font-bold mb-2'>Description</label>
          <textarea id='description' {...register('description')} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' required></textarea>
        </div>
        <div className='mb-4'>
          <label htmlFor='date' className='block text-gray-700 text-sm font-bold mb-2'>Date</label>
          <input id='date' {...register('date')} type='datetime-local' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' required />
        </div>
        <div className='flex items-center justify-between'>
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default EditEventPage;