import { TLanguageType } from '.';

export type IDictionary = {
  [key in TLanguageType]: IDictionaryLanguage;
};

export interface IDictionaryLanguage {
  title: string;
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
    title:
      'Full-Stack Developer & Product Designer | Expert in React.js, Node.js, .NET (C# 8.0) | Web Development Specialist',
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
    title:
      'Desenvolvedor Full-stack e Designer de Produto | Especialista em React.js, Node.js, .NET (C# 8.0) | Desenvolvimento Web',
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
