import Modal from '@mui/material/Modal';
import Box from'@mui/material/Box';
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
            <select id = "dropdown">
                <option value="N/A">N/A</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            </Box>
        </Modal>
    );
}
export default AddBathroom;