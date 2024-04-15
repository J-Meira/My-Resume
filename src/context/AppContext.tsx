import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { LanguageEnum, TLanguageType } from '../utils';

export interface IAppContextData {
  isDark: boolean;
  language: TLanguageType;
  onChangeMode: () => void;
  onChangeLanguage: (newLanguage: string) => void;
}

export interface IAppContextProps {
  children: ReactNode;
}

export const AppContext = createContext({} as IAppContextData);

export const AppProvider: FC<IAppContextProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<TLanguageType>('en');

  const handleChangeMode = useCallback(() => {
    localStorage.setItem('MUI_THEME_DARk', JSON.stringify(!isDark));
    setIsDark(!isDark);
  }, [isDark]);

  const handleChangeLanguage = useCallback((newLanguage: string) => {
    const test: TLanguageType = LanguageEnum[1] === newLanguage ? 'en' : 'pt';
    localStorage.setItem('MUI_LANGUAGE', JSON.stringify(test));
    setLanguage(test);
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? 'dark' : 'light',
          primary: { main: '#006a69' },
          secondary: { main: '#4a6362' },
          error: { main: '#ba1a1a' },
        },
        // palette: isDark
        //   ? {
        //       mode: 'dark',
        //       primary: { main: '#4ddad8' },
        //       secondary: { main: '#b0cccb' },
        //       error: { main: '#ffb4ab' },
        //     }
        //   : {
        //       mode: 'light',
        //       primary: { main: '#006a69' },
        //       secondary: { main: '#4a6362' },
        //       error: { main: '#ba1a1a' },
        //     },
      }),
    [isDark],
  );

  useEffect(() => {
    if (!localStorage.getItem('MUI_THEME_DARk')) {
      const userTheme = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      localStorage.setItem('MUI_THEME_DARk', JSON.stringify(userTheme));
      setIsDark(userTheme);
    } else {
      const localDark = JSON.parse(
        localStorage.getItem('MUI_THEME_DARk') || 'false',
      );
      if (localDark) setIsDark(true);
    }

    // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider
      value={{
        isDark,
        language,
        onChangeMode: handleChangeMode,
        onChangeLanguage: handleChangeLanguage,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};
