import taskImage from '../assets/images/task.jpg';
import taskImage2 from '../assets/images/task2.jpg';
import taskImage3 from '../assets/images/task3.jpg';
import { getRandomColors } from '../helpers/getRandomColors';

export const Board = {
  backlog: {
    name: 'New',
    items: [
      {
        id: crypto.randomUUID(),
        title: 'Admin Panel Front-end',
        description: 'Lorem ipsum dolor sit amet ..',
        priority: 'medium',
        deadline: 50,
        image: taskImage2,
        alt: 'task image',
        tags: [
          { title: 'Test', ...getRandomColors() },
          { title: 'Front', ...getRandomColors() },
        ],
      },
      {
        id: crypto.randomUUID(),
        title: 'Admin Panel Back-end',
        description: 'Lorem ipsum dolor sit amet ..',
        priority: 'low',
        deadline: 50,
        tags: [
          { title: 'Test', ...getRandomColors() },
          { title: 'Front', ...getRandomColors() },
        ],
      },
    ],
  },
  pending: {
    name: 'Pending',
    items: [
      {
        id: crypto.randomUUID(),
        title: 'Admin Panel Back-end',
        description: 'Lorem ipsum dolor sit amet ..',
        priority: 'high',
        deadline: 50,
        tags: [
          { title: 'Test', ...getRandomColors() },
          { title: 'Front', ...getRandomColors() },
        ],
      },
      {
        id: crypto.randomUUID(),
        title: 'Admin Panel Front-end',
        description: 'Lorem ipsum dolor sit amet ..',
        priority: 'low',
        deadline: 50,
        image: taskImage,
        alt: 'task image',
        tags: [
          { title: 'Test', ...getRandomColors() },
          { title: 'Front', ...getRandomColors() },
        ],
      },
    ],
  },
  todo: {
    name: 'Conclusive',
    items: [
      {
        id: crypto.randomUUID(),
        title: 'Admin Panel Front-end',
        description: 'Lorem ipsum dolor sit amet ..',
        priority: 'medium',
        deadline: 50,
        image: taskImage3,
        alt: 'task image',
        tags: [
          { title: 'Test', ...getRandomColors() },
          { title: 'Front', ...getRandomColors() },
        ],
      },
    ],
  },
  doing: {
    name: 'Lodged',
    items: [
      {
        id: crypto.randomUUID(),
        title: 'Admin Panel Front-end',
        description: 'Lorem ipsum dolor sit amet ..',
        priority: 'low',
        deadline: 50,
        tags: [
          { title: 'Test', ...getRandomColors() },
          { title: 'Front', ...getRandomColors() },
        ],
      },
      {
        id: crypto.randomUUID(),
        title: 'Admin Panel Back-end',
        description: 'Lorem ipsum dolor sit amet ..',
        priority: 'medium',
        deadline: 50,
        tags: [
          { title: 'Test', ...getRandomColors() },
          { title: 'Front', ...getRandomColors() },
        ],
      },
    ],
  },
  done: {
    name: 'Registered',
    items: [
      {
        id: crypto.randomUUID(),
        title: 'Admin Panel Front-end',
        description: 'Lorem ipsum dolor sit amet ..',
        priority: 'high',
        deadline: 50,
        image: taskImage,
        alt: 'task image',
        tags: [
          { title: 'Test', ...getRandomColors() },
          { title: 'Front', ...getRandomColors() },
        ],
      },
    ],
  },
};
