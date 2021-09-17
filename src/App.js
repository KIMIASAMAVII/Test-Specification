import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/home/Home";
import Location from "./components/location/Location";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Redirect to="/" />
          </Route>

          <Route path="/location">
            <Location />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
