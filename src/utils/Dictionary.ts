import { TLanguageType } from '.';

export type IDictionary = {
  [key in TLanguageType]: IDictionaryLanguage;
};

export interface IDictionaryLanguage {
  hours: string;
  yrs: string;
  mos: string;
  location: string;
  aboutMe: string;
  experience: string;
  education: string;
  courses: string;
  contact: string;
  skills: string;
  developed: string;
}

export const dictionary: IDictionary = {
  en: {
    hours: 'hours',
    yrs: 'yrs',
    mos: 'mos',
    location: 'Blumenau, Santa Catarina, Brazil',
    aboutMe: 'About me:',
    experience: 'Experience:',
    education: 'Education:',
    courses: 'Courses:',
    contact: 'Contact:',
    skills: 'Skills:',
    developed: 'Developed by ',
  },
  pt: {
    hours: 'horas',
    yrs: 'anos',
    mos: 'meses',
    location: 'Blumenau, Santa Catarina, Brasil',
    aboutMe: 'Sobre min:',
    experience: 'Experiência:',
    education: 'Educação:',
    courses: 'Cursos:',
    contact: 'Contato:',
    skills: 'Habilidades:',
    developed: 'Developed by ',
  },
};

export const getDictionary = (
  key: keyof IDictionaryLanguage,
  language: TLanguageType,
): string => {
  return dictionary[language][key];
};
