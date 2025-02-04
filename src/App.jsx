import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
    return (
        <>
            <Home />
            <Services />
            <Contact />
            <Footer />
            <Navbar />
        </>
    );
}

export default App;
