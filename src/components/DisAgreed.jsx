import React, { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import { Button, Paper ,Grow} from "@mui/material";
import { Link } from "react-router-dom";

function DisAgreed() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [leads, setLeads] = useState([]);
    useEffect(() => {
        const q = query(collection(db, "leads"), where("status", "==", "disagreed"));
        onSnapshot(q, (snapshot) => {
          setLeads(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
        console.log(leads);
      }, []);
    return (
        <div>
            <br/>
            <center>
                <strong >UNINTERESTED LEADS</strong>
            </center>
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
    
                <strong>{data.status.toUpperCase()}</strong>
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
          </Paper>
          </Grow>
        ))}
        </div>
    )
}

export default DisAgreed
