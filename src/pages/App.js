import './App.css';

import CreateSimulation from '../pages/CreateSimulation';
import Home from '../pages/Home';
import Simulation from '../pages/Simulation';
import SimulationGallery from '../pages/SimulationGallery';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/nova-simulacao">
          <CreateSimulation />
        </Route>
        <Route path="/simulacoes">
          <SimulationGallery />
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
