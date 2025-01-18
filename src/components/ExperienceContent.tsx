import dayjs, { Dayjs } from 'dayjs';
import { Box, Typography } from '@mui/material';

import { useAppContext } from '../context';
import { getDictionary } from '../utils';

interface IJob {
  period?: number;
  periodDate?: string;
  startAt?: Dayjs;
  title: string;
}

interface IContent {
  company: string;
  jobs: IJob[];
  location: string;
  period?: number;
  startAt?: Dayjs;
}

const contents: IContent[] = [
  {
    company: 'FW7 Soluções',
    startAt: dayjs('2024-08-01'),
    location: 'Blumenau - SC',
    jobs: [
      {
        title: 'Full-stack Developer',
        startAt: dayjs('2024-08-01'),
      },
    ],
  },
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

  const getPeriod = (period?: number): string => {
    if (!period) return '';

    const [years, months] = period.toFixed(1).split('.').map(Number);
    const parts: string[] = [];

    if (years) parts.push(`${years} ${getDictionary('yrs', language)}`);
    if (months) parts.push(`${months} ${getDictionary('mos', language)}`);

    return parts.join(' ');
  };

  const getCurrentPeriod = (startAt?: Dayjs): number => {
    if (!startAt) return 0;

    const start = dayjs(startAt);
    const today = dayjs();
    const totalMonths = today.diff(start, 'month') + 1;

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return Number(`${years}.${months}`);
  };

  return (
    <Box sx={{ padding: 2 }}>
      {contents.map((c) => (
        <Box className='no-print-break' key={c.company} sx={{ mb: 4 }}>
          <Typography sx={{ textDecoration: 'underline' }} variant='h5'>
            {c.company} - {getPeriod(c.period || getCurrentPeriod(c.startAt))}
          </Typography>
          <Typography>{c.location}</Typography>
          {c.jobs &&
            c.jobs.map((j) => (
              <Box className='no-print-break' key={j.title} sx={{ m: 1 }}>
                <Typography variant='caption'>
                  - {j.title}{' '}
                  {`(${
                    j.periodDate
                      ? j.periodDate
                      : j.startAt
                        ? `${j.startAt?.format('MM/YYYY')} - ${getDictionary('present', language)}`
                        : ''
                  } - ${getPeriod(j.period || getCurrentPeriod(j.startAt))})`}
                </Typography>
              </Box>
            ))}
        </Box>
      ))}
    </Box>
  );
};
