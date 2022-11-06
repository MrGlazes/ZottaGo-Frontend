import './App.css';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import SvgIcon from '@mui/material/SvgIcon';
import AddIcon from '@mui/icons-material/Add';
import React, { useState, useEffect } from 'react';
import BathroomList from './component/BathroomList';
import AddBathroom from './component/AddBathroom';
import { collection, getDocs, query } from "firebase/firestore"; 
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAMVFzpBRtRN4d62I-DYVdYsWTtXRDReYQ",
  authDomain: "zottago.firebaseapp.com",
  projectId: "zottago",
  storageBucket: "zottago.appspot.com",
  messagingSenderId: "632919112479",
  appId: "1:632919112479:web:5d65cc1ed474cec8a7ce2a",
  measurementId: "G-4XXRE2X4XZ"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const bathroomList = [{name:"Bathroom", floor:1, rating:5.0, description:"Good"}, {name:"DBH", floor:2, rating:4.7, description:"Bad"}]

const style = {
  position: 'fixed',
  top: "60vh",
  left: '50vw',
  transform: "translate(-50%,50%)"
};

function App() {
  const [showModal, setModal] = useState(false);
  const [arr, updateMyArray] = useState([]);

  const submit = async () => {
    // Update the document title using the browser API
    const q = query(collection(db, "bathrooms"));
    const querySnapshot = await getDocs(q);
    let newArr = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      newArr.push({
        building: doc.data().building, 
        rating: doc.data().rating,
        floor: doc.data().floor,
        userName: doc.data().userName
      });
      console.log(doc.id, " => ", doc.data());
    });
    updateMyArray(newArr);
  };

  useEffect(() => {
    submit();
  }, [showModal]);
  
  return (
    <div>
      <div>
        <AppBar position = "static">
          <Typography variant="h5" align="center">
            ZottaGo
          </Typography>
        </AppBar>

        <BathroomList bathroomList={arr}/>
        <Fab sx={style} onClick={() => setModal(true)}>
          <AddIcon/>
        </Fab>
      </div>
      <div>
        {showModal && <AddBathroom showModal={showModal} setModal={setModal} db={db}></AddBathroom>}
      </div>
    </div>
  );
}

export default App;
