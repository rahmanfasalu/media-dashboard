import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./app/layout";
import BuildRoute from "./app/shared/BuildRoute/BuildRoute";
import { appRoutes } from "./app/routes";
function App() {
  return (
    <>
      <Router>
        <Header />
        <BuildRoute routes={appRoutes} />
      </Router>
    </>
  );
}

export default App;
