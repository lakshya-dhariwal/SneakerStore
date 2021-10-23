import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/index.scss";

//components
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Cart from "./components/Cart.js";
import Success from "./components/Success.js";
import ProductDetail from "./components/ProductPage.js";

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
            <Route exact path="/product/:id">
              <ProductDetail />
            </Route>

            <Route exact path="/success">
              <Success />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
