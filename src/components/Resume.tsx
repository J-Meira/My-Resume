import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid2,
  Typography,
} from '@mui/material';

import { AboutContent } from './AboutContent';
import { ContactTable } from './ContactTable';
import { CoursesContent } from './CoursesContent';
import { EducationContent } from './EducationContent';
import { ExperienceContent } from './ExperienceContent';
import { SkillsTable } from './SkillsTable';

import { useAppContext } from '../context';
import { getDictionary } from '../utils';

export const Resume = () => {
  const { language } = useAppContext();
  return (
    <Container className='main-container'>
      <Grid2 container>
        <Box bgcolor='primary.main' className='sidebar'>
          <Avatar src='thumb.jpg' sx={{ mt: 2, width: 200, height: 200 }} />
          <Box>
            <ContactTable />
            <SkillsTable />
          </Box>
        </Box>
        <Box className='content'>
          <Typography variant='h2' color='primary'>
            Jonathan Meira
          </Typography>
          <Divider
            sx={{
              borderColor: 'primary.main',
              mb: 2,
            }}
          />
          <Typography variant='h4'>
            {getDictionary('title', language)}
          </Typography>
          <Typography variant='h5'>
            {getDictionary('location', language)}
          </Typography>
          <Typography variant='h3'>
            {getDictionary('aboutMe', language)}
          </Typography>
          <AboutContent />
          <Typography variant='h3'>
            {getDictionary('experience', language)}
          </Typography>
          <ExperienceContent />
          <Typography variant='h3'>
            {getDictionary('education', language)}
          </Typography>
          <EducationContent />
          <Typography variant='h3'>
            {getDictionary('courses', language)}
          </Typography>
          <CoursesContent />
        </Box>
      </Grid2>
    </Container>
  );
};
