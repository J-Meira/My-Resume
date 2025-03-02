import { useMemo } from 'react';
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

export const ExperienceContent = () => {
  const { language } = useAppContext();

  const contents: IContent[] = useMemo(() => ([
  {
    company: 'GEOvendas',
    startAt: dayjs('2025-02-20'),
    location: 'Blumenau - SC',
    jobs: [
      {
        title: getDictionary('developer', language),
        startAt: dayjs('2025-02-20'),
      },
    ],
  },
  {
    company: 'FW7 Soluções',
    startAt: dayjs('2024-08-20'),
    location: 'Blumenau - SC',
    jobs: [
      {
        title: getDictionary('developer', language),
        startAt: dayjs('2024-08-20'),
      },
    ],
  },
  {
    company: 'Bludata Software',
    period: 6.9,
    location: 'Blumenau - SC',
    jobs: [
      {
        title: getDictionary('developer', language),
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
    company: 'SEE-MG',
    period: 0.8,
    location: 'Teófilo Otoni - MG',
    jobs: [
      {
        title: getDictionary('teacher', language),
        periodDate: '06/2016 - 01/2017',
        period: 0.8,
      },
    ],
  },
  {
    company: 'Hunir Confecções',
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
    company: 'Moderna Placas',
    period: 0.7,
    location: 'Teófilo Otoni - MG',
    jobs: [
      {
        title: 'Designer',
        periodDate: '06/2014 - 12/2014',
        period: 0.7,
      },
    ],
  },
  {
    company: 'Cato',
    period: 1,
    location: 'Teófilo Otoni - MG',
    jobs: [
      {
        title: getDictionary('it', language),
        periodDate: '02/2010 - 01/2011',
        period: 1,
      },
    ],
  },
  {
    company: 'Cato',
    period: 1,
    location: 'Teófilo Otoni - MG',
    jobs: [
      {
        title: getDictionary('it', language),
        periodDate: '02/2010 - 01/2011',
        period: 1,
      },
    ],
  },
  {
    company: 'Tipo Copias',
    period: 1.2,
    location: 'Teófilo Otoni - MG',
    jobs: [
      {
        title: getDictionary('graphicDesigner', language),
        periodDate: '02/2010 - 01/2011',
        period: 1.2,
      },
    ],
  },
    {
    company: 'Auto Eletrica e Mecânica Mineira',
    period: 5.8,
    location: 'Teófilo Otoni - MG',
    jobs: [
      {
        title: getDictionary('administrative', language),
        periodDate: '01/2003 - 08/2008',
        period: 5.8,
      },
    ],
  },
]), [language]);

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
          <Typography sx={{ fontSize: '0.8rem' }}>{c.location}</Typography>
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
