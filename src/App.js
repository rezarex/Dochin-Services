import React from "react";
import "./index.css"
import Home from "./routes/Home"
import About from "./routes/About"
import ContactUs from "./routes/ContactUs"
import Project from "./routes/Project"
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/ContactUs" element={<ContactUs />}/>
      <Route path="/Project" element={<Project />}/>
    </Routes>
    </>
  );
}

export default App;
