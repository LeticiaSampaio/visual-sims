import './App.css';
import SimulationMenu from '../components/organisms/SimulationMenu';
import Simulation from '../pages/Simulation';
import Home from '../pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/simulacoes">
          <SimulationMenu />
        </Route>
        <Route path="/simulacao/:simulation?">
          <Simulation />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
