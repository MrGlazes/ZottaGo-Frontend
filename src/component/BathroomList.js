import BathroomItem from "./BathroomItem.js";
import React, { useState } from 'react';
import BathroomPage from "./BathroomPage.js";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const BathroomList = (props) => {
    const [showModal, setModal] = useState(false);
    const [selectedBathroomItem, setBathroomItem] = useState({});
    return (
        <div>
            <Grid container>
                <Grid item sx={{"width": "100%"}}>
                    <Typography style={{top: '5%', left: '4%', textAlign: 'center', mt: '.5em'}} variant="h4">UCI Bathroom Reviews</Typography>
                </Grid>
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
