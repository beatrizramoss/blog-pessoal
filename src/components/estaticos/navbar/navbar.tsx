import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import {Link} from 'react-router-dom';
import './navbar.css';

function Navbar (){
    return (
        <>
<AppBar position="static">
  <Toolbar variant="dense">
    <Box className='cursor' >
        <Typography variant="h5" color="inherit">
            BlogPessoal
        </Typography>
        </Box> 
        
        <Box display="flex" justifyContent="start">
        <Box mx={1} className='cursor' >
            <Typography variant="h6" color="inherit">
                Home
            </Typography>
        </Box> 

        <Box mx={1} className='cursor' >
            <Typography variant="h6" color="inherit">
                postagens
            </Typography>
        </Box> 

        <Box mx={1} className='cursor' >
            <Typography variant="h6" color="inherit">
                temas
            </Typography>
        </Box> 

        <Box mx={1} className='cursor' >
            <Typography variant="h6" color="inherit">
                cadastrar tema
            </Typography>
        </Box> 
        <Link to='/login' className='text-decorator-none'>
        <Box mx={1} style={{cursor: "pointer", color: "white"}} >
            <Typography variant="h6" color="inherit" >
                logout
            </Typography>
        </Box> 
        </Link>
        </Box> 
  </Toolbar>
</AppBar>
        </>
    )
}

export default Navbar;