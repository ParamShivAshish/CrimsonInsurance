import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Modal, Paper, Select, TextField } from "@mui/material";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { auth, db } from '../Firebase';
import { Link } from 'react-router-dom';
import { FieldValue, Firestore, increment } from '@firebase/firestore';
import logoBlack from "../black.png"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height:500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between"
  };
function Ldata() {
    var docid = window.location.href.slice(-20)
    const [data, setData] = useState({})
    console.log(docid)
    useEffect(() => {
        const unsub = onSnapshot(doc(db, "leads", docid), (doc) => {
            setData(doc.data())
            console.log(data)
        })
    }, [])
    const [response, setResponse] = useState("")
const [reStatus, setReStatus] = useState("")
const [reInt, setReInt] = useState("")
    const handleChange = (event) => {
        setReStatus(event.target.value);
      };
      const handlePChange = (event) => {
        setReInt(event.target.value);
      };
    return (
        <div>
           <center>
<img src={logoBlack} style={{height:100,padding:10}} alt=""  />
</center>    <Box sx={style}>

<div style={{ display: "flex", justifyContent: "space-between",flexDirection:"column" }}>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
                >
              <ion-icon style={{ padding: 10 }} name="person"></ion-icon>

              <strong>{data.name}</strong>
            </div>
            <div
              style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
                >
              <ion-icon style={{ padding: 10 }} name="call"></ion-icon>

              <strong>{data.contact}</strong>
            </div>
      
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <ion-icon style={{ padding: 10 }} name="mail"></ion-icon>

            <strong>{data.email}</strong>
          </div>
          <div
            style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
            }}
          >
            <ion-icon style={{ padding: 10 }} name="locate"></ion-icon>

            <strong>{data.state}</strong>
          </div>
          <div
            style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
            }}
          >
            <ion-icon style={{ padding: 10 }} name="map"></ion-icon>

            <strong>{data.country}</strong>
          </div>
          <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <ion-icon style={{ padding: 10 }} name="stats-chart"></ion-icon>
  
              <strong>{data.status}</strong>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <ion-icon style={{ padding: 10 }} name="analytics"></ion-icon>
  
              <strong>{data.policy}</strong>
            </div>
       
            </div> 
          <TextField
           
            rows="2"
            multiline="true"
        
            primary
            color="primary"
            fullWidth="true"
            size="small"
            id="outlined-basic"
            label="Response"
            type="text"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
              <ion-icon name="clipboard"></ion-icon>
                </InputAdornment>
              ),
            }}
          />
          <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Status</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={reStatus}
    label="Status"
    onChange={handleChange}
  >
    <MenuItem value={"raw"}>raw</MenuItem>
    <MenuItem value={"disagreed"}>Disagreed</MenuItem>
    <MenuItem value={"interested"}>Interested</MenuItem>
  </Select>
</FormControl>
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Policy</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={reInt}
    label="policy"
    onChange={handlePChange}
  >
    <MenuItem value={"Life"}>Life</MenuItem>
    <MenuItem value={"Health"}>Health</MenuItem>
    <MenuItem value={"Car"}>Car</MenuItem>
    <MenuItem value={"Bike"}>Bike</MenuItem>
    <MenuItem value={"none"}>None</MenuItem>


  </Select>
</FormControl>

<Button component={Link} to={"/leads"} style={{background:"black"}} onClick={async ()=>{

await setDoc(doc(db, "leads", docid), {
    status: reStatus,
    policy:reInt,
    response:response,
    contactedBy: auth.currentUser.displayName,
    contactedByUid : auth.currentUser.uid,
  },{merge: true});
  await setDoc(doc(db, "workers", auth.currentUser.uid), {
    numCont: increment(1)
  },{merge: true});

}}><strong style={{color:"white"}}>UPDATE</strong></Button>
        

                 </Box>

        </div>
    )
}

export default Ldata
