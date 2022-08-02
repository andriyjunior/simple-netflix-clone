import { ThemeEnum } from 'const';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { LS } from 'utils';

interface IContext {
  theme: ThemeEnum;
  setTheme: (value: ThemeEnum) => void;
  switchTheme: () => void;
}

const Context = createContext<IContext>({
  theme: ThemeEnum.dark,
  setTheme: () => {},
  switchTheme: () => {}
});

export const useThemeContext = () => useContext(Context);

interface IThemeContext {
  children: ReactNode;
}

export const ThemeContext = ({ children }: IThemeContext) => {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.dark);

  useEffect(() => {
    const storedTheme = LS.get('theme') as ThemeEnum;

    if (ThemeEnum[storedTheme]) {
      setTheme(ThemeEnum[storedTheme]);
    } else {
      LS.add('theme', ThemeEnum.dark);
    }
  }, []);

  const handleSetTheme = (value: ThemeEnum) => {
    setTheme(value);
    LS.add('theme', value);
  };

  const handleSwitchTheme = () => {
    if (theme === ThemeEnum.dark) {
      handleSetTheme(ThemeEnum.light);
    } else {
      handleSetTheme(ThemeEnum.dark);
    }
  };

  return (
    <Context.Provider value={{ theme, setTheme: handleSetTheme, switchTheme: handleSwitchTheme }}>
      {children}
    </Context.Provider>
  );
};
