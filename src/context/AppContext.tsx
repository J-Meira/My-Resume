import { createContext } from 'react';
import { TLanguageType } from '../utils';

export interface IAppContextData {
  isDark: boolean;
  language: TLanguageType;
  onChangeMode: () => void;
  onChangeLanguage: (newLanguage: string) => void;
}

export const AppContext = createContext({} as IAppContextData);
