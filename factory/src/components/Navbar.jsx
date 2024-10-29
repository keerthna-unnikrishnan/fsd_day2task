import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
  
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      sx={{
            background: 'rgb(2,0,36)',
            background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,116,1) 0%, rgba(214,255,147,1) 63%, rgba(0,212,255,1) 93%)'
        }}
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
         
          <Button color="inherit">flavors</Button>
         
        </Toolbar>
      </AppBar>
    </Box>
   
  )
}

export default Navbar