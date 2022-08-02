import { Modal } from 'components/organisms/Modal';
import { Home } from 'pages';
import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CommonTemplate } from 'templates';
import { AppThemeProviderWrapper } from './AppThemeProviderWrapper';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <AppThemeProviderWrapper>
        <CommonTemplate>
          <Home />
        </CommonTemplate>
      </AppThemeProviderWrapper>
    </BrowserRouter>
  );
};
