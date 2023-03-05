import './App.css';
import Forms from './modules/Forms';
import Nav from './modules/Nav';
import Footer from './modules/Footer';
import Users from "./modules/Users"
import Manifest from "./modules/Manifest"
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      
      <header className="App-header">
        
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/forms">
            <Forms />
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/manifest">
            <Manifest />
          </Route>
          </Switch>
        
      </header>
          

      <Footer />
    </div>
  );
}

export default App;
