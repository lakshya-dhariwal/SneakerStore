import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./styles/index.scss";

//components
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Cart from "./components/Cart.js";
import ProductCard from "./components/ProductCard.js";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="border">
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
