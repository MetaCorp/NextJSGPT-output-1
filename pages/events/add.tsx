import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import useEvents from '../../hooks/useEvents';
import { IEvent } from '../../types';
import Input from '../../components/atoms/Input';
import TextArea from '../../components/atoms/TextArea';
import Button from '../../components/atoms/Button';

const AddEventPage = () => {
  const { addEvent } = useEvents();
  const { register, handleSubmit, reset } = useForm<IEvent>();
  const router = useRouter();

  const onSubmit = (data: IEvent) => {
    addEvent(data);
    reset();
    router.push('/');
  };

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-2xl font-bold my-6'>Add New Event</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <Input id='title' type='text' register={register('title')} className='input-class' required />
          <TextArea id='description' register={register('description')} className='textarea-class' required />
          <Input id='date' type='datetime-local' register={register('date')} className='input-class' required />
        </div>
        <div className='flex items-center justify-between'>
          <Button type='submit' className='button-class'>Add Event</Button>
        </div>
      </form>
    </div>
  );
};

export default AddEventPage;