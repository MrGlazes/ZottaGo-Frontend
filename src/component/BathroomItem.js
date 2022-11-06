import Button from '@mui/material/Button';

const BathroomItem = (props) => {

    const toBathroomPage = (event) => {
        console.log("I'm in the barthroom");
    }

    return (
        <div>
            <Button variant = "contained" onClick={toBathroomPage}>{props.bathroomItem.rating} The name is: {props.bathroomItem.name} </Button>  
        </div>
    );

}
export default BathroomItem;
