import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./comps/header";
import Footer from "./comps/footer";
import Menu from "./comps/menu";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import UploaderPage from "./pages/uploaderPage";
import ServicePage from "./pages/servicePage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Menu />

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/upload" element={<UploaderPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
