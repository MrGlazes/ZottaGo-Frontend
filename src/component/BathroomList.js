import BathroomItem from "./BathroomItem.js";

const BathroomList = (props) => {
    return (
        <div>
            {props.bathroomList.map((bathroom) => {
                return (
                    <BathroomItem bathroomItem = {bathroom}/>
                );
            })}
            
                   
        </div>
    );
}
export default BathroomList;
