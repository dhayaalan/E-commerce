import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomeView from "./pages/HomeView";
import ProductsByCategoryView from "./pages/ProductsByCategoryView";
import ProductView from "./pages/ProductView";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/products/:productId" element={<ProductView />} />
        <Route path="/categories/:categoryId" element={<ProductsByCategoryView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
