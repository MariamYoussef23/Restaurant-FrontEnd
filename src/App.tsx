import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/footer";
import Checkout from "./pages/checkout";
import Success from "./pages/success";


function App(): JSX.Element { 
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path="/checkout" element={<Checkout />}/>  
      <Route path="/success" element={<Success />}/>  
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
