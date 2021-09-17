import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Upload from "./pages/Upload"
import Download from "./pages/Download"

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/:key">
             < Download/>  
          </Route>
          <Route exact  path="/">
            <Upload />
          </Route>
          <Route path="*">
             < Upload/>  
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
