import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={Books} />
      <Route exact path="/books" component={Books} />
      <Route component={NoMatch} />
    </div>
    </Router>
  );
}

export default App;
