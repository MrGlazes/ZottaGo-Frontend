import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import { collection, getDocs, query, doc, setDoc, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function AddBathroom(props) { 

    const [building, setBuilding] = useState("DBH");
    const [rating, setRating] = useState(1);

    const submit = async () => {
        console.log(building, rating);
        await setDoc(doc(props.db, "bathrooms", uuidv4()), {
            building: building,
            rating: rating,
        });
        props.setModal(false);
    }
     
    return (
        <Modal open={props.showModal} onClose={() => props.setModal(false)}>
            <Box sx={style}>
            <div id="Name-Of-Building">
            <Typography variant="h6">Building Name:</Typography>
            </div>
            <select id = "Building" onChange={e => setBuilding(e.target.value)}>
                <option value="DBH">DBH</option>
                <option value="SSH">SSH</option>
                <option value="CS">CS</option>
                <option value="ENG">ENG</option>
            </select>
            <div id="Rating">
            <Typography variant="h6">Rating:</Typography>
            </div>
            <select id = "Rating" onChange={e => setRating(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onClick={submit}>Submit</button>
            </Box>
        </Modal>
    );
}


export default AddBathroom;