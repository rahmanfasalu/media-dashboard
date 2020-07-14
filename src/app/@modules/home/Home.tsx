import React from "react";
import { Switch } from "react-router-dom";
import { homeRoutes } from "../../routes";

import { Footer } from "src/app/layout";
import BuildRoute from "src/app/shared/BuildRoute/BuildRoute";

/*
 * Module Home
 *
 * Landiing page Module
 * Screens in this modules:
 *  - DashBoards : Channles and Programs info
 *  - Play
 *  - Rewind
 *  - Landing
 *  - Catalog
 */

const Home = (): JSX.Element => {
  return (
    <>
      <Switch>
        <BuildRoute routes={homeRoutes} />
      </Switch>
      <Footer />
    </>
  );
};
export default Home;
