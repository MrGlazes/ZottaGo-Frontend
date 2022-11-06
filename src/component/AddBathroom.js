import Modal from '@mui/material/Modal';
function AddBathroom(props) {
    return (
        <Modal open={props.showModal} onClose={() => props.setModal(false)}>
            
            </Modal>
    );
}
export default AddBathroom;