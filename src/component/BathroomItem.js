import Button from '@mui/material/Button';
const BathroomItem = (props) => {

    const toBathroomPage = (event) => {
        console.log("I'm in the barthroom");
    }

    return (
        <div>
            <Button style={{width: '100%'}} variant = "contained" onClick={() => {props.setBathroomItem(props.bathroomItem); props.setModal(true);}}> {props.bathroomItem.name} is {props.bathroomItem.rating} stars </Button>  
        </div>
    );
}
export default BathroomItem;
