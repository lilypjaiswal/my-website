import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
import Link from '@mui/material/Link';
import Contact from '../../Pages/Contact/Contact';

function Navbar() {
  const pages = [
    {page: "Home", route: "/"},
    {page: "Contact", route: "/contact-me"},
  ];
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'inline-flex'}}>
            {pages.map((link) => (
              <Button
                href={link.route}
                key={link.page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {link.page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    
  );
}
export default Navbar;