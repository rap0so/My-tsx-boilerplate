import { lazy } from 'react';

const routes = [
  { path: '/', Component: lazy(() => import('pages/home')) },
  { path: '*', Component: lazy(() => import('pages/notfound')) },
];

export default routes;
