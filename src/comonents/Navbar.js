import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {theme} from "./themes"
import { ThemeProvider } from '@emotion/react'; 
import logo from '../logo.svg';


export default function ButtonAppBar() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='success'>
        <Toolbar>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: "auto", fontSize: "1.5rem", height: "1.5rem", width: "1.5rem"}}
          >
            <span><img src={logo} height="36px" width="22.5px" alt='Logo'/></span>
          </IconButton>
          <Button color="inherit" sx={{ position: "relative", left: "4%", fontSize: "1.25rem"}}><i className="fa-solid fa-database"></i></Button>
          <Button color="inherit" sx={{ position: "relative", left: "2.5%", fontSize: "1.25rem"}}><i class="fa-solid fa-gear"></i></Button>
          <Button color="inherit" sx={{ position: "relative", left: "1%", fontSize: "1.25rem"}}><i class="fa-regular fa-circle-question"></i></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
