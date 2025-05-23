import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "./views/Home/Home";
import Events from "./views/Events/Events";
import About from "./views/About/About";

import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";
import Contact from "./views/Contact/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsappButton />
    </>
  );
}

export default App;
