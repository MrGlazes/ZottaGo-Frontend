import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


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
     
    return (
        <Modal open={props.showModal} onClose={() => props.setModal(false)}>
            <Box sx={style}>
            <div id="Name-Of-Building">
            <Typography variant="h6">Building Name:</Typography>
            </div>
            <form>
            <select id = "Building">
                <option value="1">DBH</option>
                <option value="2">SSH</option>
                <option value="3">CS</option>
                <option value="4">ENG</option>
            </select>
            <div id="Rating">
            <Typography variant="h6">Rating:</Typography>
            </div>
            <select id = "Rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input type = "submit" value="Submit"/>
            </form>
            </Box>
        </Modal>
    );
}


export default AddBathroom;