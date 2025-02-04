import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
function App() {
    return (
        <>
            <Home />
            <Services />
            <About />
            <Contact />
            <Footer />
            <Navbar />
        </>
    );
}

export default App;
