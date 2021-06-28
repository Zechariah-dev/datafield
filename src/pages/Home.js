import React from "react";

import Main from "../components/Main";
import Hero from "../components/Hero";
import Chart from '../components/Chart';

export default function LandingPage(props) {
  return (
    <div>
      <Hero />
      <Chart />
      <Main />
    </div>
  );
}
