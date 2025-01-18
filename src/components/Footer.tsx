import { useState } from 'react';

import { Link, Paper, Popover, Typography } from '@mui/material';

import { useAppContext } from '../context';
import { getDictionary } from '../utils';

const date = new Date();

export const Footer = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const { language } = useAppContext();

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const getReleaseDate = () => {
    const temp = import.meta.env.VITE_V_DATE || '2024-04-15T13:23:52';
    const split = temp.split('T');
    const dates = split[0].split('-');
    return `${dates[1]}/${dates[2]}/${dates[0]} - ${split[1].substr(0, 5)}`;
  };

  const openPopover = Boolean(anchorEl);

  return (
    <footer className='no-print'>
      <Paper square elevation={4}>
        <Typography
          aria-haspopup='true'
          aria-owns={openPopover ? 'version-date-popover' : undefined}
          component='small'
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          {import.meta.env.VITE_VERSION}
        </Typography>
        <Typography component='small'>
          {getDictionary('developed', language)}
          <Link
            href='https://github.com/J-MEIRA'
            rel='noopener noreferrer'
            target='_blank'
            sx={{ textDecoration: 'none' }}
          >
            <b>J-Meira</b>
          </Link>{' '}
          © 2007 - {date.getFullYear()}
        </Typography>
        <Popover
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          disableRestoreFocus
          id='version-date-popover'
          onClose={handlePopoverClose}
          open={openPopover}
          sx={{
            pointerEvents: 'none',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 1 }}>{`${getReleaseDate()} (UTC)`}</Typography>
        </Popover>
      </Paper>
    </footer>
  );
};
