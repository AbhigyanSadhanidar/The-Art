import React from 'react';

import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AllProducts from "./Pages/AllProducts";
import ProductDetails from "./Pages/ProductDetails";
import Auth from "./Pages/AuthPage";
import Menu from "./Pages/Menu";
import TestHome from "./Pages/TestHome";
import Posters from "./Pages/Posters";
import ArtExhibition from "./Pages/ArtExhibition";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/exhibition" element={<ArtExhibition />} />
      <Route path="/poster" element={<Posters />} />
      <Route path="/home" element={<Menu />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/test" element={<TestHome />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default App;
