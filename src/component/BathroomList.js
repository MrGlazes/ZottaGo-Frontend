import BathroomItem from "./BathroomItem.js";
import React, { useState } from 'react';
import BathroomPage from "./BathroomPage.js";
import Grid from '@mui/material/Grid';

const BathroomList = (props) => {
    const [showModal, setModal] = useState(false);
    const [selectedBathroomItem, setBathroomItem] = useState({});
    return (
        <div>
            <Grid container>
                {props.bathroomList.map((bathroom) => {
                    return (
                        <Grid item sx={{"width": "100%", "mt": ".5em"}}>
                            <BathroomItem bathroomItem={bathroom} setModal={setModal} setBathroomItem={setBathroomItem}/>
                        </Grid>
                    );
                })}                   
            </Grid>
        <BathroomPage showModal={showModal} setModal={setModal} bathroomItem={selectedBathroomItem}></BathroomPage>
        </div>
    );
}
export default BathroomList;
