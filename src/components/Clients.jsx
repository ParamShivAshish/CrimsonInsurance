import { collection, doc, getDoc, onSnapshot, query, where} from '@firebase/firestore'
import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import logoBlack from "../black.png"
import {auth, db} from "../Firebase"
import { Button, Grow, Paper} from "@mui/material";

import { Link } from "react-router-dom";
function Clients() {
    const [leads, setLeads] = useState([])
    const [pData, setPData] = useState({})
    useEffect(async() => {
        const docRef = doc(db, "workers", auth.currentUser.uid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  setPData(docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}

const q = query(collection(db, "leads"), where("contactedByUid", "==", auth.currentUser.uid));
onSnapshot(q, (snapshot) => {
  setLeads(
    snapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }))
  );
});
console.log(leads);
    }, [])
    return (
        <div>
            <center>
                <img style={{height:100,padding:10}} src={logoBlack} alt="" />
            </center>
            <center>
            <strong style={{fontSize:40}}>
                {auth.currentUser.displayName}
            </strong>
            <Typography>
                Contacted Leads : {pData.numCont}
            </Typography>
            </center>
            <center>
            <strong >
                Your Leads
            </strong></center>
            {leads.map(({ id, data }) => (
          <Grow in={true}>
             
         <Paper
            style={{
              width: 600,
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: 20,
              padding: 20,
            }}
          >
              
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
  
                <strong style={{paddingRight:10}}>{data.contact}</strong>
              </div>
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
    
                <strong>Yet to be contacted</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
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
              <Button component={Link} to={`/ldata?id=${id}`} style={{background:"black"}} ><strong style={{color:"white"}}>CONTACT LEAD</strong></Button>
              </div>
              <strong>
                  previously contacted by {data.contactedByUid}
                  </strong>  
                  <p>
                  {data.response}
                  </p>   
          </Paper>
          </Grow>
        ))}
        </div>
    )
}

export default Clients
