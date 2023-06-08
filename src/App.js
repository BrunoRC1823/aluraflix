import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import NuevaCategoria from "./Pages/PagesForms/NuevaCategoria";
import NuevoVideo from "./Pages/PagesForms/NuevoVideo";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nuevoVideo' element={<NuevoVideo />} />
        <Route path='/nuevaCategoria' element={<NuevaCategoria />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
