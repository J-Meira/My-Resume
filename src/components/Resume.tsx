import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { ContactTable } from './ContactTable';
import { AboutContent } from './AboutContent';
import { ExperienceContent } from './ExperienceContent';
import { EducationContent } from './EducationContent';
import { CoursesContent } from './CoursesContent';
import { SkillsTable } from './SkillsTable';
import { useAppContext } from '../context';
import { getDictionary } from '../utils';

export const Resume = () => {
  const { language } = useAppContext();
  return (
    <Container className='main-container'>
      <Grid container>
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
            Full-stack Developer | Product Designer | Front-end Developer
            (React.Js) | Back-end Developer ( Node.Js, .Net C# 8.0) | Web
            Development
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
      </Grid>
    </Container>
  );
};
