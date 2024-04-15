import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Typography,
} from '@mui/material';
import { ReactNode } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdWhatsapp, MdMail } from 'react-icons/md';
import { useAppContext } from '../context';
import { getDictionary } from '../utils';

const list: IContact[] = [
  {
    icon: <MdWhatsapp size={25} />,
    info: import.meta.env.VITE_PHONE,
    destiny: 'tel:' + import.meta.env.VITE_PHONE,
    isPhone: true,
  },
  {
    icon: <MdMail size={25} />,
    info: import.meta.env.VITE_EMAIL,
    destiny: 'mailto:' + import.meta.env.VITE_EMAIL,
  },
  {
    icon: <FaLinkedinIn size={25} />,
    info: import.meta.env.VITE_LINKEDIN,
    destiny: 'https://www.linkedin.com/in/' + import.meta.env.VITE_LINKEDIN,
  },
  {
    icon: <FaGithub size={25} />,
    info: import.meta.env.VITE_GITHUB,
    destiny: 'https://github.com/' + import.meta.env.VITE_GITHUB,
  },
];

export interface IContact {
  icon: ReactNode;
  info: string;
  isPhone?: boolean;
  destiny?: string;
}

export const ContactTable = () => {
  const { language } = useAppContext();

  const maskPhone = (value: string) => {
    value = value.replace(/\D/g, '');
    if (value.length < 13) {
      value = value
        .replace(/(\d{0})(\d)/, '$1+$2')
        .replace(/(\d{2})(\d)/, '$1 ($2')
        .replace(/(\d{2})(\d)/, '$1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})(\d+?$)/, '$1');
    } else {
      value = value
        .replace(/(\d{0})(\d)/, '$1+$2')
        .replace(/(\d{2})(\d)/, '$1 ($2')
        .replace(/(\d{2})(\d)/, '$1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(\d{4})(\d+?$)/, '$1');
    }
    return value;
  };

  const getContactInfo = (contact: IContact) => {
    const info = !contact.isPhone ? contact.info : maskPhone(contact.info);
    return contact.destiny ? (
      <a href={contact.destiny} target='_blank'>
        {info}
      </a>
    ) : (
      info
    );
  };
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>
              <Typography sx={{ ml: 2 }} variant='h3'>
                {getDictionary('contact', language)}
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ fontSize: '1.1em' }}>
          {list.map((contact) => (
            <TableRow key={contact.info}>
              <TableCell sx={{ fontWeight: 600 }}>{contact.icon}</TableCell>
              <TableCell>{getContactInfo(contact)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
