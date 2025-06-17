import { Route } from 'react-router-dom';
import {
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { AppPath } from '@/app/enums/app-path';
import { AppRouterProviders } from '@/app/components/app-router-providers';
import { DefaultLayout } from '@/ui/layout/components/default-layout';

export const useCreateRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppRouterProviders />}>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<></>} />
          <Route path={AppPath.HOME} element={<></>} />
          <Route path={AppPath.ABOUT} element={<></>} />
        </Route>
      </Route>
    )
  );
};
