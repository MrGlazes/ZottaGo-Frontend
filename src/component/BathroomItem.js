import Button from '@mui/material/Button';

const BathroomItem = (props) => {
    return (
        <div>
            <Button variant = "contained" onClick={() => {props.setBathroomItem(props.bathroomItem); props.setModal(true);}}> {props.bathroomItem.rating} The name is: {props.bathroomItem.name} </Button>  
    
        </div>
    );

}
export default BathroomItem;
