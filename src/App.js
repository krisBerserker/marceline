import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";

/* Les imports pour les routes */
import Home from "./screens/Home";
import Preinscription from "./screens/Preinscription";
import SignIn from "./screens/SignIn";
import About from "./screens/About";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Gestion from "./screens/Gestion";


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="App">
      
      <Routes>
        <Route path="/" element = { <Home/>}/>
        <Route path="/preinscription" element = { <Preinscription/>}/>
        <Route path="/about" element = { <About/>}/>
        <Route path="/gestion" element = { <Gestion/>}/>
        <Route path="/contact" element = { <Contact/>}/>
        <Route path="/feature" element = { <Feature/>}/>
        <Route path="/signIn" element = { <SignIn/>}/>
      </Routes>

    </main>
  );
}

export default App;
