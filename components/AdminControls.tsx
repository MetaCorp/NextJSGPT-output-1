import React from 'react';
import { useForm } from 'react-hook-form';
import useEvents from '../hooks/useEvents';
import { IEvent } from '../types';

interface AdminControlsProps {
  event?: IEvent;
}

const AdminControls: React.FC<AdminControlsProps> = ({ event }) => {
  const { register, handleSubmit, setValue } = useForm<IEvent>();
  const { addEvent, updateEvent, deleteEvent } = useEvents();

  const onSubmit = (data: IEvent) => {
    if(event) {
      updateEvent({ ...data, id: event.id });
    } else {
      addEvent(data);
    }
  };

  const onDelete = () => {
    if(event && event.id) {
      deleteEvent(event.id);
    }
  };

  // Prefill the form when an event is passed
  React.useEffect(() => {
    if(event) {
      setValue('title', event.title);
      setValue('description', event.description);
      setValue('date', event.date);
    }
  }, [event, setValue]);

  return (
    <div className='my-4'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Form Inputs and Submit Button Here */}
      </form>
      {event && (
        <button onClick={onDelete}>{'Delete Event'}</button>
      )}
    </div>
  );
};

export default AdminControls;