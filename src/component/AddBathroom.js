import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import {useState} from 'react';
import { doc, setDoc } from "firebase/firestore";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import TextFeild from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
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
    const [userName, setUserName] = useState("Unknown");
    const [floor, setFloor] = useState(1);

    const handleUser = (event) => {
        setUserName(event.target.value);
    }

    const handleFloor = (event) =>  {
        setFloor(event.target.value);
    }

    const submit = async () => {
        console.log(building, rating, userName, floor);
        await setDoc(doc(props.db, "bathrooms", uuidv4()), {
            building: building,
            rating: rating,
            userName: userName,
            floor: floor
        });
        props.setModal(false);
    }
     
    return (
        <Modal open={props.showModal} onClose={() => props.setModal(false)}>
            <Box sx={style}>
                <FormControl fullwidth>
                <Grid container spacing={2}>

                    <Grid item xs={8}>
                    {/* <InputLabel id="buildinglabel">Building</InputLabel> */}
                    <TextFeild
                        sx={{"width": "100%"}} 
                        label="Building"
                        select
                        id="Building" 
                        value={building}
                        onChange={e => setBuilding(e.target.value)}
                    >
                        <MenuItem value="DBH">DBH</MenuItem>
                        <MenuItem value="SSH">SSH</MenuItem>
                        <MenuItem value="CS">CS</MenuItem>
                        <MenuItem value="ENG">ENG</MenuItem>
                    </TextFeild>
                    </Grid>

                    <Grid item xs={8}>
                        <TextField type="number" value={floor} onChange={handleFloor} id="outlined-basic" label="Floor Number" variant="outlined" />
                    </Grid>

                    <Grid item xs={8}>
                    {/* <InputLabel id="ratinglabel">Rating</InputLabel> */}
                    <TextFeild 
                        sx={{"width": "100%"}} 
                        label="Rate"
                        select
                        id="Rating" 
                        value={rating}
                        onChange={e => setRating(e.target.value)}
                    >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                    </TextFeild>
                    </Grid>
                    
                    <Grid item xs={8}>
                    <TextField value={userName} onChange={handleUser} id="outlined-basic" label="User Name" variant="outlined" />
                    <Button variant="contained" size="large" onClick={submit}>Submit</Button>
                    </Grid>
                </Grid>
                </FormControl>
            </Box>
        </Modal>
    );
}


export default AddBathroom;