import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar position="static" className='bg-slate-700'>
      <Toolbar className='bg-slate-700'>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          MPI
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/signup" className='active:ring-offset-violet-700'>Signup</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
