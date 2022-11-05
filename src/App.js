import './App.css';
import BathroomList from './component/BathroomList';

const bathroomList = [{name:"Bathroom 1", location:"Building 1"}, {name:"Bathroom 2", location:"Building 2"}]

function App() {
  return (
    <BathroomList bathroomList={bathroomList}/>
  );
}

export default App;
