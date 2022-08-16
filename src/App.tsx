import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import Main from "./main/Main";
import Products from "./admin/Products";
import ProductsCreate from "./admin/ProductsCreate";
import ProductsUpdate from "./admin/ProductsUpdate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/admin/products" exact component={Products} />
        <Route path="/admin/products/create" exact component={ProductsCreate} />
        <Route path="/admin/products/:id/edit" exact component={ProductsUpdate} />
      </BrowserRouter>
    </div>
  );
}

export default App;
