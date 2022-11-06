import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { render } from '@testing-library/react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
function BathroomPage(props) {
  return (
        <Modal open={props.showModal} onClose={() => props.setModal(false)} aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
            <Box sx={style} className={Modal} style={{width: '80%'}}>
          <div id="modal-modal-title">
            <Typography position="absolute" style={{top: '5%', left: '4%'}} variant="h4">{props.bathroomItem.building} on Floor {props.bathroomItem.floor}</Typography>
            <Typography position="absolute" style={{top: '5%', right: '4%'}} variant="h6">Rating: {props.bathroomItem.rating} / 5</Typography>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
            <br></br>
                {props.bathroomItem.userName} ranks this bathroom as {props.bathroomItem.rating} stars!
            </div><br></br>
            <div>
              What do you think?
            </div>
          </Typography>
        </Box>
        </Modal>
    );
}
export default BathroomPage;