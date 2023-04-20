import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from "./layout/header";
import Footer from "./layout/Footer";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route exact path="/" element={<Home/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
