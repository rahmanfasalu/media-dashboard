import RouteType from "../interfaces/route.type";
import Home from "../@modules/home/Home";
import ProgramDetails from "../@modules/programDetails/ProgramDetails";
export const appRoutes: RouteType[] = [
  { path: "/", exact: true, component: Home },
  { path: "/home", exact: false, component: Home },
  { path: "/show/:id", exact: false, component: ProgramDetails },
];

export default appRoutes;
