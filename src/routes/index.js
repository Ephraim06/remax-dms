import Layout from '../layout';
import Boards from '../pages/boards';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        children: [
          {
            path: '',
            element: <Boards />,
          },
        ],
      },
    ],
  },
];

export default routes;
