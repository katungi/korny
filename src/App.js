import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    // react must always return a single element
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/">
            <h1 className="font-bold text-2xl">This is the Home Page</h1>
          </Route>
          <Route path="/about">
            <h1 className="font-bold text-2xl">About Page ya'll !</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
