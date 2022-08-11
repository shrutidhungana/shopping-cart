import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import ProductList from "../ProductList/ProductList"
import Cart from "../Components/Cart/Cart"

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart /> }/>
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
