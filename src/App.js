import './App.css';
import BathroomList from './component/BathroomList';

const bathroomList = [{name:"Bathroom 1", rating:5.0, description:"Good"}, {name:"Bathroom 2", rating:4.7, description:"Bad"}]

function App() {
  return (
    <BathroomList bathroomList={bathroomList}/>
  );
}

export default App;
