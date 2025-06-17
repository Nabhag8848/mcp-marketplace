import { Outlet, useLocation } from 'react-router-dom';
import { StrictMode } from 'react';
import { PageTitle } from '@/ui/utilities/page-title/components/page-title';
import { getPageTitleFromPath } from '@/ui/utilities/page-title/utils/get-page-title-from-path';

export const AppRouterProviders = () => {
  const { pathname } = useLocation();
  const pageTitle = getPageTitleFromPath(pathname);
  return (
    <StrictMode>
      <PageTitle title={pageTitle} />
      <Outlet />
    </StrictMode>
  );
};
