import Modal from '@mui/material/Modal';
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
  
function BathroomPage(props) {
    return (
        <Modal open={props.showModal} onClose={() => props.setModal(false)} aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
            <Box sx={style}>
          <div id="modal-modal-title">
            <Typography variant="h4">{props.bathroomItem.name} on Floor {props.bathroomItem.floor}</Typography>
            <Typography variant="h6">Rating: {props.bathroomItem.rating} {props.bathroomItem.floor}</Typography>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
                Description:
            <br></br>
                {props.bathroomItem.description}
            </div><br></br>
            <div>
                Reviews:
            </div>
            <div>
                ***Text Holder*** Reviews here
            </div>
          </Typography>
        </Box>
        </Modal>
    )
}
export default BathroomPage;