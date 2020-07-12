import {
  Dashboard,
  Landing,
  Play,
  Catalog,
  Rewind,
} from "../@modules/home/screens";
import RouteType from "../interfaces/route.type";

export const homeRoutes: RouteType[] = [
  { path: "/", exact: true, component: Dashboard },
  { path: "/home", exact: true, component: Dashboard },
  { path: "/home/landing", exact: false, component: Landing },
  { path: "/home/play", exact: false, component: Play },
  { path: "/home/dashboard", exact: false, component: Dashboard },
  { path: "/home/catalog", exact: false, component: Catalog },
  { path: "/home/rewind", exact: false, component: Rewind },
];

export default homeRoutes;
