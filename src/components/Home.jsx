import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tilt from "react-tilt";
import {
  Button,
 
  Grid,
  Grow,
  InputAdornment,
  Paper,
  TextField,
  Typography,
 
} from "@mui/material";

import { addDoc,collection ,Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../Firebase";
const auth = getAuth()
function Home() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  const [policy, setPolicy] = useState("");
  const [checked, setChecked] = useState(false);
  const [life, setLife] = useState(false);
const [car, setCar] = useState(false)
const [h, setH] = useState(false)
  var l = [];
 const upload = () =>{
   addDoc(collection(db, "leads"), {
      name: name,
      state: state,
      country: country,
      contact: contact,
      email: email,
      gender:gender,
      age:age,
      policy:policy,
      status:"raw",
      uploaderID: auth.currentUser.uid,
      uploadDate: Timestamp.now(),
    });
    setName("")
    setState("")
    setCountry("")
    setContact("")
    setAge("")
    setGender("")
    setPolicy("")
    setEmail("")
  }

  return (
        <Grow in = {true}>
    <div style={{ padding: 20 }}>
      <center>
        <Grid container spacing={1} style={{ width: 700, maxWidth: "100%" }}>
          <Grid item xs={6} md={6}>
            <Tilt className="Tilt" style={{ height: 120 }}>
              <div className="Tilt-inner">
                <Button
                  component={Link}
                  to={"/leads"}
                  style={{
                    width: 300,
                    height: 100,
                    backgroundColor: "black",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <center>
                    <strong style={{ color: "white" }}>RAW LEADS</strong>
                  </center>
                </Button>
              </div>
            </Tilt>
          </Grid>
          <Grid item xs={6} md={6}>
            <Tilt className="Tilt" style={{ height: 120 }}>
              <div className="Tilt-inner">
                <Button
                  component={Link}
                  to={"/disagreed"}
                  style={{
                    width: 300,
                    height: 100,
                    backgroundColor: "#EC255A",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <center>
                    <strong style={{ color: "white" }}>Disagreed Leads</strong>
                  </center>
                </Button>
              </div>
            </Tilt>
          </Grid>
          <Grid item xs={6} md={6}>
            <Tilt className="Tilt" style={{ height: 120 }}>
              <div className="Tilt-inner">
                <Button
                  component={Link}
                  to={"/interested"}
                  style={{
                    width: 300,
                    height: 100,
                    backgroundColor: "#9AE66E",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <center>
                    <strong style={{ color: "white" }}>Interested Leads</strong>
                  </center>
                </Button>
              </div>
            </Tilt>
          </Grid>
          <Grid item xs={6} md={6}>
            <Tilt className="Tilt" style={{ height: 120 }}>
              <div className="Tilt-inner">
                <Button
                  component={Link}
                  to={"/yourclients"}
                  style={{
                    width: 300,
                    height: 100,
                    backgroundColor: "black",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <center>
                    <strong style={{ color: "white" }}>YOUR CLIENTS</strong>
                  </center>
                </Button>
              </div>
            </Tilt>
          </Grid>
        </Grid>

        <Paper
          style={{
            width: 700,
            maxWidth: "90%",
            padding: 20,
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <Typography><strong>Enter Lead Data Manually</strong></Typography>
          <br />
          <TextField
            primary
            color="primary"
            fullWidth="true"
            size="small"
            id="outlined-basic"
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ion-icon name="person"></ion-icon>
                </InputAdornment>
              ),
            }}
          />
<br/>
          <TextField
            primary
            color="primary"
            fullWidth="true"
            size="small"
            id="outlined-basic"
            label="Contact"
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ion-icon name="call"></ion-icon>
                </InputAdornment>
              ),
            }}
          />
          <br/>
          <TextField
            primary
            color="primary"
            fullWidth="true"
            size="small"
            id="outlined-basic"
            label="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
               <ion-icon name="mail"></ion-icon>
                </InputAdornment>
              ),
            }}
          />
<br/>

          <TextField
            primary
            color="primary"
            fullWidth="true"
            size="small"
            id="outlined-basic"
            label="Gender"
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ion-icon name="male"></ion-icon>
                  <ion-icon name="female"></ion-icon>
                  <ion-icon name="transgender"></ion-icon>
                </InputAdornment>
              ),
            }}
          />
<br/>

          <TextField
            primary
            color="primary"
            fullWidth="true"
            size="small"
            id="outlined-basic"
            label="Age"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ion-icon name="hourglass"></ion-icon>
                </InputAdornment>
              ),
            }}
          />
<br/>

               


          <TextField
            primary
            color="primary"
            fullWidth="true"
            size="small"
            id="outlined-basic"
            label="State"
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 <ion-icon name="locate"></ion-icon>
                </InputAdornment>
              ),
            }}
          />
<br/>

          <TextField
            primary
            color="primary"
            fullWidth="true"
            size="small"
            id="outlined-basic"
            label="Country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ion-icon name="map"></ion-icon>
                </InputAdornment>
              ),
            }}
          />
<br/>
<TextField
            primary
            color="primary"
            fullWidth="true"
            size="small"
            id="outlined-basic"
            label="Previous Policy if any"
            type="text"
            value={policy}
            onChange={(e) => setPolicy(e.target.value)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 <ion-icon name="document-attach"></ion-icon>
                </InputAdornment>
              ),
            }}
          />
          <br/>
<center>
<Tilt className="Tilt" style={{width:100}}>
          <Button  onClick={upload} style={{background:"black"}}>
            <strong style={{ color: "white" }}>ADD LEAD</strong>
          </Button>
          </Tilt>
          </center>
         
        </Paper>
      </center>
    </div>
    </Grow>
  );
}

export default Home;
