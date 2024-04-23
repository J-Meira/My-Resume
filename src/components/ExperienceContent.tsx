import { Box, Typography } from '@mui/material';
import { useAppContext } from '../context';
import { getDictionary } from '../utils';

const contents = [
  {
    company: 'Bludata Software',
    period: 6.9,
    location: 'Blumenau - SC',
    jobs: [
      {
        title: 'Full-stack Developer',
        periodDate: '11/2019 - 01/2024',
        period: 4.3,
      },
      {
        title: 'Designer',
        periodDate: '05/2017 - 11/2019',
        period: 2.6,
      },
    ],
  },
  {
    company: 'CEP Paulo Viana',
    period: 0.6,
    location: 'Teófilo Otoni - MG',
    jobs: [
      {
        title: 'Professor',
        periodDate: '08/2016 - 01/2017',
        period: 0.6,
      },
    ],
  },
  {
    company: 'E.E. Nª Sª de Fátima',
    period: 0.7,
    location: 'Teófilo Otoni - MG',
    jobs: [
      {
        title: 'Professor',
        periodDate: '06/2016 - 12/2016',
        period: 0.7,
      },
    ],
  },
  {
    company: 'Só Uniformes',
    period: 1.3,
    location: 'Teófilo Otoni - MG',
    jobs: [
      {
        title: 'Designer',
        periodDate: '03/2015 - 05/2016',
        period: 1.3,
      },
    ],
  },
  {
    company: 'Cato',
    period: 1,
    location: 'Teófilo Otoni - MG',
    jobs: [
      {
        title: 'Técnico de suporte em TI',
        periodDate: '02/2010 - 01/2011',
        period: 1,
      },
    ],
  },
];
export const ExperienceContent = () => {
  const { language } = useAppContext();
  const getPeriod = (period: number): string => {
    const text = period.toString().split('.');
    const valueReturn: string[] = [];
    if (text[0] !== '0')
      valueReturn.push(`${text[0]} ${getDictionary('yrs', language)}`);
    if (text[1])
      valueReturn.push(`${text[1]} ${getDictionary('mos', language)}`);
    return valueReturn.join(' ');
  };

  return (
    <Box sx={{ padding: 2 }}>
      {contents.map((c) => (
        <Box className='no-print-break' key={c.company} sx={{ mb: 4 }}>
          <Typography sx={{ textDecoration: 'underline' }} variant='h5'>
            {c.company} - {getPeriod(c.period)}
          </Typography>
          <Typography>{c.location}</Typography>
          {c.jobs &&
            c.jobs.map((j) => (
              <Box className='no-print-break' key={j.title} sx={{ m: 1 }}>
                <Typography variant='caption'>
                  - {j.title} {`(${j.periodDate} - ${getPeriod(j.period)})`}
                </Typography>
              </Box>
            ))}
        </Box>
      ))}
    </Box>
  );
};
