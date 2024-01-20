import { atom } from 'jotai';
import { IEvent } from '../types';

// Sample initial events
const initialEvents: IEvent[] = [
  {
    id: '1',
    title: 'Tech Conference 2023',
    description: 'An annual tech conference covering the latest in tech.',
    date: '2023-05-15T09:00:00Z'
  },
  {
    id: '2',
    title: 'Web Development Workshop',
    description: 'A workshop for aspiring web developers to learn the basics.',
    date: '2023-06-20T10:00:00Z'
  },
  {
    id: '3',
    title: 'Live Music Night',
    description: 'Enjoy live music performances from various artists.',
    date: '2023-07-05T18:00:00Z'
  }
];

export const eventsAtom = atom<IEvent[]>(initialEvents); // The atom is now initialized with the sample events