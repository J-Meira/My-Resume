import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  FormControl,
  MenuItem,
  Select,
} from '@mui/material';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useAppContext } from '../context';

export const Header = () => {
  const { isDark, onChangeMode, language, onChangeLanguage } = useAppContext();

  return (
    <AppBar component='nav' className='no-print'>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant='h1'
          sx={{
            justifyContent: 'center',
            fontSize: '1rem',
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          My Resume
        </Typography>
        <Box display='flex'>
          <IconButton
            color='inherit'
            aria-label='theme switch'
            edge='start'
            onClick={() => onChangeMode()}
            sx={{ mr: 2 }}
          >
            {isDark ? <MdLightMode /> : <MdDarkMode />}
          </IconButton>
          <FormControl variant='standard' sx={{ color: 'white' }}>
            <Select
              className='language-input'
              id='app-language'
              value={language}
              onChange={(e) => onChangeLanguage(e.target.value)}
            >
              <MenuItem value='en'>EN - US</MenuItem>
              <MenuItem value='pt'>PT - BR</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
