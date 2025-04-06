import React from 'react';

import { Route, Routes } from "react-router-dom";
import HomePage from "./amplify/src/Pages/HomePage";
import AllProducts from "./amplify/src/Pages/AllProducts";
import ProductDetails from "./amplify/src/Pages/ProductDetails";
import Auth from "./amplify/src/Pages/AuthPage";
import Menu from "./amplify/src/Pages/Menu";
import TestHome from "./amplify/src/Pages/TestHome";
import Posters from "./amplify/src/Pages/Posters";
import ArtExhibition from "./amplify/src/Pages/ArtExhibition";

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
