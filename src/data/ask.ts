import { AskType } from '../types';
import { users } from './users';

export const asks: AskType[] = [
  {
    id: 'e1',
    title: 'Tech Networking Event',
    description:
      'Join us for an evening of tech talks and networking with top industry professionals.',
    user: users[0],
    date: '07.10',
  },
  {
    id: 'e2',
    title: 'Startup Pitch Night',
    description: 'Watch new startups pitch their companies to a panel of venture capitalists.',
    user: users[1],
    date: '07.10',
  },
  {
    id: 'e3',
    title: 'Outdoor Concert',
    description: 'Experience an unforgettable night under the stars with great music and company.',
    user: users[2],
    date: '07.10',
  },
  {
    id: 'e4',
    title: 'Art & Wine Tasting',
    description:
      'Explore exquisite art collections while tasting fine wines curated from around the world.',
    user: users[3],
    date: '07.10',
  },
  {
    id: 'e5',
    title: 'Coding Workshop',
    description:
      'Hands-on coding workshop where you can learn and practice new programming languages.',
    user: users[4],
    date: '07.10',
  },
];
