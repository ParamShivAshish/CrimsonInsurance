import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Tilt from "react-tilt"
import Zoom from '@mui/material/Zoom';
import {IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { signOut} from "firebase/auth"
import {auth} from "./Firebase"


function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function Nav(props) {
  console.log(props.active)
    return (
        <div>
      <center>
             <AppBar position="sticky" style={{background:"#000000",height:60}}>
        <Toolbar style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
        <strong style={{color:"white", fontFamily: "Lobster Two",fontSize:30 }}>
                  Crimson Insurance
                </strong>
                
       <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
        <Tilt className="Tilt" options={{ max : 40 }} >

            <IconButton
             component={Link}
            to={"/"} color="secondary" aria-label="Profile">
              <ion-icon style={{fontSize: "30px"}} name="newspaper"></ion-icon>
            </IconButton >
            </Tilt>
        <Tilt className="Tilt" options={{ max : 40 }} >

  <IconButton
             component={Link}
            to={"/leads"} color="inherit" aria-label="Profile">
            
            <ion-icon style={{fontSize: "30px"}} name="albums"></ion-icon>
            
  </IconButton >
  </Tilt>
  <Tilt className="Tilt" options={{ max : 40 }} >

            <IconButton
             component={Link}
            to={"/disagreed"} color="inherit" aria-label="Profile">
           <ion-icon style={{fontSize: "30px"}} name="alert-circle"></ion-icon>

  </IconButton >
  </Tilt>
  <Tilt className="Tilt" options={{ max : 40 }} >

            <IconButton
             component={Link}
            to={"/interested"} color="inherit" aria-label="Profile">
            <ion-icon style={{fontSize:"30px"}} name="checkmark-done-circle"></ion-icon>

  </IconButton >
  </Tilt>
  <Tilt className="Tilt" options={{ max : 40 }} >

            <IconButton
             component={Link}
            to={"/yourclients"} color="inherit" aria-label="Profile">
            
            <ion-icon style={{fontSize:"30px"}} name="analytics"></ion-icon>

  </IconButton >
  </Tilt>
  
  <Tilt className="Tilt" options={{ max : 40 }} >
  
            <IconButton
             component={Link}
             to={"/"} color="inherit"
             onClick={()=>{
               signOut(auth)
             }}>
         <ion-icon name="log-in"></ion-icon>

  </IconButton >
  </Tilt>
  </div>  
 

          
       
        </Toolbar>
      </AppBar>
  </center>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          {/* <KeyboardArrowUpIcon /> */}
        </Fab>
      </ScrollTop>
        </div>
    )
}

export default Nav
