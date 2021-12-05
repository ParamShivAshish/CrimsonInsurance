import React, { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import { Button, Paper, Grow} from "@mui/material";
import { Link } from "react-router-dom";

function Leads() {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [leads, setLeads] = useState([]);
 

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height:250,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between"
  };
  useEffect(() => {
    const q = query(collection(db, "leads"), where("status", "==", "raw"));
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
                <strong >POTENTIAL LEADS</strong>
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
  
              <strong>Yet to be contacted</strong>
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
        
        </Paper>
        </Grow>
      ))}
    </div>
  );
}

export default Leads;
