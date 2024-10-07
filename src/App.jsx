import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Gallery from "@/pages/Gallery";
import DonateUs from "@/pages/DonateUs";
import ContactUs from "@/pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/donate" element={<DonateUs />} />
      <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;