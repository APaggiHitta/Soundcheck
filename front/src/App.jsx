import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "./views/Home/Home";
import Events from "./views/Events/Events";
import About from "./views/About/About";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <WhatsappButton />
    </>
  );
}

export default App;
