import React from "react";
import { Switch, Route } from "react-router-dom";

import LoadingPage from "./pages/Loading.page";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));
const WhyChooseUs = React.lazy(() => import("./pages/WhyChooseUs"));

function App() {
  return (
    <React.Suspense fallback={<LoadingPage />}>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" />
          <Route path="/why-choose-us" component={WhyChooseUs} />
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer />
      </React.Fragment>
    </React.Suspense>
  );
}

export default App;
