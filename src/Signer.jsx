import { Button, Grow, InputAdornment, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";
// import { fire } from "./Firebase";
import {auth, db} from "./Firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged  } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "@firebase/firestore";
import { updateProfile } from "@firebase/auth";
import logoWhite from "./white.png"

function Signer() {
  
  const [signInPassword, setSignInPassword] = useState("");
  const [name, setName] = useState("")
  const [signInEmail, setSignInEmail] = useState("");
  const [signInEmailError, setSignInEmailError] = useState("");
  const [signInPasswordError, setSignInPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [box, setBox] = useState(true)
  function ToggleSignUp() {
      if(box) {
          setBox(false)
      }else {
          setBox(true)
      }
  }
  const clearInputs = () => {
    setSignInEmail('');
    setSignInPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };


  const dispatch = useDispatch();
  const HandleLogin = () => {
 
      signInWithEmailAndPassword(auth, signInEmail, signInPassword)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setSignInEmailError(err.message);
            break;
          default:
          case "auth/wrong-password":
            setSignInPasswordError(err.message);
            break;
        }
        console.log(err);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth ,(authUser) => {
      if (authUser) {
        dispatch(
          login({
            email: auth.currentUser.email,
            isAuth: true,
          })
        );
      } else {
        dispatch(logout(null));
      }
    });
  }, []);
  const HandleSignUp = () => {
    clearInputs();
    // clearErrors();
    
    createUserWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((authUser) => {
      console.log(authUser);
      return updateProfile(auth.currentUser, {
        displayName: name
      })
    }).catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          default:
          case 'auth/weak-password':
            setPasswordError(err.message);
        }
      }).then(
        ()=>{
          setDoc(doc(db, "workers", auth.currentUser.uid), {
            name:auth.currentUser.displayName,
            uid:auth.currentUser.uid,
            numCont: 0
            
          });
        }
      )
      
      .then(()=>{
        setName("")
        setSignInEmail("")
        setSignInPassword("")
      })
  }

  return (
    <form autocomplete="off">
    <div style={{height: "100vh",padding:10,background: "black"}}>
    <center>
      <Grow in={true}>
                <img style={{height:200,padding:10}} src={logoWhite} alt="" />
                </Grow>
                
            </center>
            <center><strong style={{fontSize:20,color:"white", fontFamily:'Noto Serif JP'}}>
            真紅

                </strong></center>
            <center><strong style={{fontSize:30,color:"white", fontFamily: "Lobster Two" }}>
                  Crimson Insurance
                </strong></center>
                <br/>
    {box ? (
      <center style={{margin: "auto"}}>
        <Grow in={true}>
        <Paper
        elevation="5"
          style={{
            padding :10,
            maxWidth: 400,
            height: 250,
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
           
          }}
        >
          <TextField
          primary
            fullWidth="true"
            size="small"
            color="primary"
            id="outlined-basic"
            label="Email"
            type="text"
            value={signInEmail}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 <ion-icon name="mail"></ion-icon>
                </InputAdornment>
              ),
            }}
            variant="outlined"
            onChange={(e) => setSignInEmail(e.target.value)}
          />
          {signInEmailError ? (<p>{signInEmailError}</p>): null}
          
          <TextField
          primary
          color="primary"
            fullWidth="true"
            size="small"
            id="outlined-basic"
            label="Password"
            type="password"
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                <ion-icon name="key"></ion-icon>
                </InputAdornment>
              ),
            }}
          />
          {/* <p>{signInPasswordError}</p> */}
          <div style={{paddingLeft:20,paddingRight:20,display:"flex", flexDirection:"column" ,justifyContent:"space-evenly",height:100}}>
          <Button size= "small" variant="contained" color="primary" onClick={HandleLogin}>Sign In</Button>
          <Button size= "small" variant="contained" color="primary" onClick={ToggleSignUp}>Sign Up</Button>
</div>
        </Paper>
        </Grow>
      </center>
    ) : (
        <center style={{margin: "auto"}}>
          <Grow in={true}>
        <Paper
        elevation="4"
          style={{
              padding :10,
            maxWidth: 400,
         
            height: 250,
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
              <TextField
            fullWidth="true"
            size="small"
            color="primary"
            id="outlined-basic"
            label="Name"
            type="text"
            value={name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ion-icon name="person-circle"></ion-icon>
                </InputAdornment>
              ),
            }}
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth="true"
            size="small"
            color="primary"
            id="outlined-basic"
            label="Email"
            type="text"
            value={signInEmail}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 <ion-icon name="mail"></ion-icon>
                </InputAdornment>
              ),
            }}
            variant="outlined"
            onChange={(e) => setSignInEmail(e.target.value)}
          />
                 {signInEmailError ? (<p>{signInEmailError}</p>): null}

          <TextField
            fullWidth="true"
            size="small"
            id="outlined-basic"
            label="Password"
            type="password"
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ion-icon name="key"></ion-icon>
                </InputAdornment>
              ),
            }}
          />
          {/* <p>{signInPasswordError}</p> */}
          <Button size= "small" variant="contained" color="primary" onClick={HandleSignUp}>Sign Up</Button>

          <Button size= "small" variant="contained" color="primary" onClick={ToggleSignUp}>Sign In</Button>

        </Paper>
        </Grow>
        </center>
    )} 
    </div>
    </form>
  );
}

export default Signer;
