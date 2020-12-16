import React from 'react';
import './App.css';
import Todo from "./Todo";
import Joke from "./Joke";
import Cats from "./Cats";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Cats</Link>
                      </li>
                      <li>
                          <Link to="/todo">Tasks</Link>
                      </li>
                      <li>
                          <Link to="/joke">Jokes</Link>
                      </li>
                  </ul>
              </nav>

              <Switch>
                  <Route path="/todo">
                      <Todo/>
                  </Route>
                  <Route path="/joke">
                      <Joke/>
                  </Route>
                  <Route path="/">
                      <Cats/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
