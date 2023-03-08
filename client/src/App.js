import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AllPets from './components/AllPets';
import NewPet from './components/NewPet';
import OnePet from './components/OnePet';
import EditPet from './components/EditPet';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Pet Shelter</h1>
        <Switch>

          <Route exact path = "/">
            <AllPets></AllPets>
          </Route>

          <Route exact path = "/pets/new">
            <NewPet></NewPet>
          </Route>

          <Route exact path = "/pets/:_idParam">
            <OnePet></OnePet>
          </Route>

          <Route exact path = "/pets/:_idParam/edit">
            <EditPet></EditPet>
          </Route>
        
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;