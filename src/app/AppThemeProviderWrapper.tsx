import { ThemeContext, useThemeContext } from 'contexts';
import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalCSS from 'global.css';
import { themes } from 'styles';

interface IAppThemeProviderProps {
  children: ReactNode;
}

const AppThemeProvider: FC<IAppThemeProviderProps> = ({ children }) => {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalCSS />
      {children}
    </ThemeProvider>
  );
};

export const AppThemeProviderWrapper: FC<IAppThemeProviderProps> = ({ children }) => (
  <ThemeContext>
    <AppThemeProvider>{children}</AppThemeProvider>
  </ThemeContext>
);
