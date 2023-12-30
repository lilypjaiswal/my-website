import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { FormControl, FormLabel } from '@mui/material';

import './Contact.css';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w8ndaiy', 'template_qzjnjc4', form.current, 'FOR8hoMmw2n1oqP1_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
    {/* inputref prop for mui form */}
{/*      
      <input type="text" name="user_name" />
      
      <input type="email" name="user_email" />
      
      <textarea name="message" /> */}
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     <TextField id="first-name" label="Firstname" variant="outlined" />
      <TextField id="last-name" label="Lastname" variant="outlined" />
      <TextField id="email" label="Email" variant="outlined" />
      <TextField id="Message" label="Message" variant="outlined" />
    </Box>
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;