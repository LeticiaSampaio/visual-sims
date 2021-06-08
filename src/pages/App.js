import './App.css';

import CreateSimulation from '../pages/CreateSimulation';
import Home from '../pages/Home';
import Simulation from '../pages/Simulation';
import SimulationGallery from '../pages/SimulationGallery';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <HashRouter>
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
      </HashRouter>
    </Router>
  );
}

export default App;
