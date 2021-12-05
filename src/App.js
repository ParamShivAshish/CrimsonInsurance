import Signer from './Signer';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom"
import { selectUser } from './features/userSlice';
import ProtectedRoute from './ProtectedRoute'
import Main from './Main';
import Profile from './components/Profile';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { purple, grey } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFFFFF" ,
    },
  },
});

function App() {
  const isAuth = useSelector(selectUser)
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Router>
      <Switch>

      <Route path = "/">
      {isAuth ? (
      <Switch>

              <ProtectedRoute exact component={Main} isAuth={isAuth}/>

              {/* <Main/> */}
      </Switch>
        // null
      ) :(
        <Signer/>
        // null
      )
      }
      </Route>
      


      </Switch>
      </Router>
    </div>
    </ThemeProvider>

  );
}

export default App;
