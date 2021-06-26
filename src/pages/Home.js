import React from "react";

import Main from "../components/Main";
import Hero from "../components/Hero";
import Chart from '../components/Chart';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LandingPage(props) {
  return (
    <div>
      <Navbar />
      <Hero />
      <Chart />
      <Main />
      <Footer />
    </div>
  );
}
