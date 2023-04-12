import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import SingleCountry from "../components/SingleCountry";
import { AllCountries } from "./AllCountries";
import { FavouritePage } from "./FavouritePage";

import Home from "./Home";

const RoutesFile = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countrydetails" element={<SingleCountry />} />
        <Route path="/allcountries" element={<AllCountries />} />
        <Route path="/favourite" element={<FavouritePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesFile;
