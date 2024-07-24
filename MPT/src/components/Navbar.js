import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '../context/ThemeContext'; // Adjust path as needed
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // Use the theme context

  return (
    <AppBar position="static" className='bg-slate-700'>
      <Toolbar className='bg-slate-700'>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          MPI
        </Typography>
        <div className='flex items-center'>
          <Button color="inherit" className='hover:underline' component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/signup" className='active:ring-offset-violet-700'>Signup</Button>
          <Button
            color="inherit"
            onClick={toggleTheme}
            className='ml-4'
            >
            {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
