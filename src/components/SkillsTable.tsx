import {
  Chip,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { getDictionary } from '../utils';
import { useAppContext } from '../context';

const list = [
  'JavaScript',
  'TypeScript',
  'React.Js',
  'Redux.Js',
  'Material UI',
  'css',
  'Sass',
  'C#',
  '.Net 8.0',
  'Node.Js',
  'Express.Js',
  'GraphQL',
  'MSSQL',
  'MYSQL',
  'Git',
  'Adobe Creative Suite',
  'Adobe XD',
  'Figma',
  'Npm',
  'Yarn',
  'StoryBook',
  'Docker',
  'AWS',
];

export const SkillsTable = () => {
  const { language } = useAppContext();
  return (
    <TableContainer sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>
              <Typography sx={{ ml: 2 }} variant='h3'>
                {getDictionary('skills', language)}
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ fontSize: '1.1em' }}>
          <TableRow>
            <TableCell>
              <Box className='skills-list'>
                {list.map((i) => (
                  <Chip
                    key={i}
                    label={i}
                    color='primary'
                    variant='outlined'
                    size='small'
                  />
                ))}
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
