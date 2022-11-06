import BathroomItem from "./BathroomItem.js";
import React, { useState } from 'react';
import BathroomPage from "./BathroomPage.js";

const BathroomList = (props) => {
    const [showModal, setModal] = useState(false);
    const [selectedBathroomItem, setBathroomItem] = useState({});
    return (
        <div>
            <div>
                {props.bathroomList.map((bathroom) => {
                    return (
                        <BathroomItem bathroomItem={bathroom} setModal={setModal} setBathroomItem={setBathroomItem}/>
                    );
                })}                   
            </div>
        <BathroomPage showModal={showModal} setModal={setModal} bathroomItem={selectedBathroomItem}></BathroomPage>
        </div>
    );
}
export default BathroomList;
