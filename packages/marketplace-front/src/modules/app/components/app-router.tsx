import { RouterProvider } from 'react-router-dom';
import { useCreateRouter } from '@/app/hooks/use-create-router';

export const AppRouter = () => {
  return <RouterProvider router={useCreateRouter()} />;
};
