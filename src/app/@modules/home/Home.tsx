import React from "react";
import { Switch } from "react-router-dom";
import { homeRoutes } from "../../routes";
import BuildRoute from "../../shared/BuildRoute/BuildRoute";

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
    </>
  );
};
export default Home;
