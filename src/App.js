import React from "react";
import Main from "./components/Main";
import Navi from "./components/Navi";
import Lista from "./components/Lista";
import Stoper from "./components/Stoper";
import Licznik from "./components/Licznik";
import Rej from "./components/Rej";
import Log from "./components/Log";
import Omnie from "./components/Omnie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navi />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/lista" component={Lista} />
          <Route path="/stoper" component={Stoper} />
          <Route path="/licznik" component={Licznik} />
          <Route path="/rej" component={Rej} />
          <Route path="/log" component={Log} />
          <Route path="/omnie" component={Omnie} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
