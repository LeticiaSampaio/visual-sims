import './App.css';

import SimulationGallery from '../pages/SimulationGallery';
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
