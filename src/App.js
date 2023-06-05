import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import NuevaCategoria from "./Pages/NuevaCategoria";
import NuevoVideo from "./Pages/NuevoVideo";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registrarVideo' element={<NuevoVideo />} />
        <Route path='/registrarCategoria' element={<NuevaCategoria />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
