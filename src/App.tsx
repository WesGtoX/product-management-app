import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import Main from "./main/Main";
import Products from "./admin/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/admin/products" exact component={Products} />
      </BrowserRouter>
    </div>
  );
}

export default App;
