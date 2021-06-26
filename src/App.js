import React from "react";
import { Switch, Route } from "react-router-dom";

import LoadingPage from "./pages/Loading.page";

const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <React.Suspense fallback={<LoadingPage />}>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" />
          <Route path="/why-choose-us" />
          <Route path="/contact" />
        </Switch>
      </React.Fragment>
    </React.Suspense>
  );
}

export default App;
