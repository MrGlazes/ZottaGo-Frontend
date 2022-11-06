import './App.css';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';


import BathroomList from './component/BathroomList';

const bathroomList = [{name:"Bathroom 1", rating:5.0}, {name:"Bathroom 2", rating:4.7}]

function App() {
  return (
    <div>
      <AppBar position = "static">
        <Typography variant="h5" align="center">
          ZottaGo
        </Typography>
      </AppBar>

      <BathroomList bathroomList={bathroomList}/>

    </div>
  );
}

export default App;
