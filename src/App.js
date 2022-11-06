import './App.css';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { useEffect, useState } from 'react';
import { collection, getDocs, query } from "firebase/firestore"; 
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import BathroomList from "./component/BathroomList";

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

function App() {

  const [arr, updateMyArray] = useState([]);

  const submit = async () => {
    // Update the document title using the browser API
    const q = query(collection(db, "bathrooms"));
    const querySnapshot = await getDocs(q);
    let newArr = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      newArr.push({name: doc.data().name});
      console.log(doc.id, " => ", doc.data());
    });
    updateMyArray(newArr);
  };

  useEffect(() => {
    submit();
  }, []);
  
  return (
    <div>
      <AppBar position = "static">
        <Typography variant="h5" align="center">
          ZottaGo
        </Typography>
      </AppBar>

      <BathroomList bathroomList={arr}/>
    </div>
  );
}

export default App;
