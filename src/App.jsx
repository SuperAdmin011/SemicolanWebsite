import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
function App() {
    return (
        <>
            <Navbar />
            <Home />
            <Product />
            <About />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
