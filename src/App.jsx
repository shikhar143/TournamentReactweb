import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Input from "./Input";

const App = () => {
    return(
        <>
        <Navbar />
        <Routes>
        <Route exact path="/" element= {<Home />} />
        <Route exact path="/about" element= {<About />} />
        <Route exact path="/service" element= {<Service />} />
        <Route exact path="/contact" element= {<Contact />} />
        <Route exact path="/input" element= {<Input />} />
        <Route path= '*' element={<Navigate replace to="/" /> } />
        </Routes>
        <Footer />
        </>
    );
};
 
export default App;