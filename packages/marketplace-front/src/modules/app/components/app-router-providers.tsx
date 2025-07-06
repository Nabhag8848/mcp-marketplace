import { Outlet, useLocation } from 'react-router-dom';
import { StrictMode } from 'react';
import { PageTitle } from '@/ui/utilities/page-title/components/page-title';
import { getPageTitleFromPath } from '@/ui/utilities/page-title/utils/get-page-title-from-path';
import { ApolloGraphQLProvider } from '@/graphql';

export const AppRouterProviders = () => {
  const { pathname } = useLocation();
  const pageTitle = getPageTitleFromPath(pathname);
  return (
    <StrictMode>
      <ApolloGraphQLProvider>
        <PageTitle title={pageTitle} />
        <Outlet />
      </ApolloGraphQLProvider>
    </StrictMode>
  );
};
