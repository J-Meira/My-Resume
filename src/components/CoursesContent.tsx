import { Box, Link, Typography } from '@mui/material';
import { useAppContext } from '../context';
import { getDictionary } from '../utils';

const contents = [
  {
    company: 'Udemy',
    title: 'Learn to build an e-commerce store with .Net, React & Redux',
    link: 'https://www.udemy.com/certificate/UC-5bcbbab4-50fc-4027-aa86-10ba70179a5b/',
    date: '03/2024',
    duration: 32.5,
  },
  {
    company: 'Udemy',
    title: 'C# .NET Core 8 with MS SQL Complete Beginner to Master',
    link: 'https://www.udemy.com/certificate/UC-2bb8c09d-f4ac-4e5e-9dd4-8135e2584d82/',
    date: '01/2024',
    duration: 23,
  },
  {
    company: 'Alura',
    title: 'Flutter: criando um app',
    link: 'https://cursos.alura.com.br/certificate/jonathanmeira/flutter-crie-primeiro-app',
    date: '12/2021',
    duration: 15.5,
  },
  {
    company: 'Alura',
    title: '"UX Strategy: divergindo e afunilando ideias',
    link: 'https://cursos.alura.com.br/certificate/d4cf3247-610a-4e73-ad4d-f9cbc6ce5a96',
    date: '12/2021',
    duration: 12,
  },
  {
    company: 'Alura',
    title: 'UX Usability: facilite a vida do seu usuário no mobile',
    link: 'https://cursos.alura.com.br/certificate/a6fbc653-b468-46d6-91c2-a5791e6c69f2',
    date: '12/2021',
    duration: 10,
  },
  {
    company: 'Alura',
    title: 'Adobe XD: design visual de um site mobile',
    link: 'https://cursos.alura.com.br/certificate/bf5dc498-99e6-4335-b958-b8fad43d90cf',
    date: '11/2021',
    duration: 10,
  },
  {
    company: 'Alura',
    title: 'Design Thinking: viabilizando soluçõe',
    link: 'https://cursos.alura.com.br/certificate/de9f5283-2d9d-42d0-a384-8c659700ba2e',
    date: '11/2021',
    duration: 8,
  },
  {
    company: 'Alura',
    title: 'UX: entenda a experiência de usuário',
    link: 'https://cursos.alura.com.br/certificate/6dd77d1d-a287-4099-868f-bf2d417417b5',
    date: '11/2021',
    duration: 8,
  },
  {
    company: 'Alura',
    title: 'UX: o que é experiência de usuário',
    link: 'https://cursos.alura.com.br/certificate/170ad275-2372-45b4-a0b7-f0decc7b2a7c',
    date: '11/2021',
    duration: 5,
  },
  {
    company: 'Alura',
    title: 'Node.js e JWT: autenticação com tokens',
    link: 'https://cursos.alura.com.br/certificate/0dd0141c-7f07-4409-be86-ffa1d7a1cdf1',
    date: '11/2020',
    duration: 8,
  },
  {
    company: 'Alura',
    title: 'Node.js: Refresh Tokens e confirmação de cadastro',
    link: 'https://cursos.alura.com.br/certificate/9ff33e9a-ff91-49cf-908e-bf58fac5452e',
    date: '11/2020',
    duration: 10,
  },
  {
    company: 'Alura',
    title: 'Rest com NodeJS: API com Express e MySQ',
    link: 'https://cursos.alura.com.br/certificate/5783e48e-f85f-4fec-9033-0c7e6e35e1d1',
    date: '11/2020',
    duration: 8,
  },
  {
    company: 'Alura',
    title: 'Docker: Criando containers sem dor de cabeça',
    link: 'https://cursos.alura.com.br/certificate/2477f833-223f-44b3-a984-10e9a494f90c',
    date: '09/2020',
    duration: 10,
  },
];
export const CoursesContent = () => {
  const { language } = useAppContext();
  return (
    <Box sx={{ padding: 2 }}>
      {contents.map((c) => (
        <Box key={c.title} sx={{ mb: 4 }}>
          <Link href={c.link} target='_blank'>
            <Typography sx={{ textDecoration: 'underline' }} variant='h5'>
              {c.title}
            </Typography>
          </Link>
          <Typography variant='caption'>
            {`${c.company} - ${c.date} - ${c.duration} ${getDictionary('hours', language)}`}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
