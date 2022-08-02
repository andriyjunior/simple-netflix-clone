import { useThemeContext } from 'contexts';
import React from 'react';

export const Switch = () => {
  const { theme, switchTheme } = useThemeContext();

  return (
    <button type="button" onClick={switchTheme}>
      Switch {theme}
    </button>
  );
};
