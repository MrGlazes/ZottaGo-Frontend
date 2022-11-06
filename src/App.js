import './App.css';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import SvgIcon from '@mui/material/SvgIcon';
import AddIcon from '@mui/icons-material/Add';

import BathroomList from './component/BathroomList';

const bathroomList = [{name:"Bathroom", floor:1, rating:5.0, description:"Good"}, {name:"DBH", floor:2, rating:4.7, description:"Bad"}]

const style = {
  position: 'fixed',
  top: "80vh",
  left: '50vw',
  transform: "translate(-50%,50%)"
};

function App() {
  return (
    <div>
      <AppBar position = "static">
        <Typography variant="h5" align="center">
          ZottaGo
        </Typography>
      </AppBar>

      <BathroomList bathroomList={bathroomList}/>
      <Fab sx={style}>
        <AddIcon/>
      </Fab>

    </div>
  );
}

export default App;
