import { useCallback } from 'react';

import { Box, Typography } from '@mui/material';

import { useAppContext } from '../context';
import { TLanguageType } from '../utils';

export interface ITitle {
  language: TLanguageType;
  title: string;
}

export interface IContent {
  company: string;
  location: string;
  period: string;
  titles: ITitle[];
}

const contents: IContent[] = [
  {
    company: 'UNIASSELVI',
    location: 'Indaial - SC',
    period: '(2014-2017)',
    titles: [
      {
        language: 'en',
        title: 'Bachelor of Information Technology',
      },
      {
        language: 'pt',
        title: 'Bacharel em Sistema de Informação',
      },
    ],
  },
];
export const EducationContent = () => {
  const { language } = useAppContext();

  const getTitle = useCallback(
    (titles: ITitle[]) => {
      const title = titles.find((c) => c.language === language);
      return title ? title.title : '';
    },
    [language],
  );

  return (
    <Box sx={{ padding: 2 }}>
      {contents.map((c) => (
        <Box className='no-print-break' key={c.company} sx={{ mb: 4 }}>
          <Typography sx={{ textDecoration: 'underline' }} variant='h5'>
            {getTitle(c.titles)}
          </Typography>
          <Box sx={{ m: 1 }}>
            <Typography variant='caption'>
              {c.company} - {c.period}
            </Typography>
            <Typography>{c.location}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
