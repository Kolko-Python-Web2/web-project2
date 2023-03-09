import Forms from './modules/Forms';
import Nav from './modules/Nav';
import Footer from './modules/Footer';
import Users from "./modules/Users"
import Manifest from "./modules/Manifest"
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
        <Switch>
          <Route exact path="/">
          <h1>Home</h1>
          <Footer />
          </Route>
          <Route path="/forms">
          <Forms />
          <Footer />
          </Route>
          <Route path="/users">
          <Users />
          <Footer />
          </Route>
          <Route path="/manifest">
          <Manifest />
          <Footer />
          </Route>
          </Switch>
    </div>
  );
}

export default App;
