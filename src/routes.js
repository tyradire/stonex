import { 
  HOME_ROUTE, 
  SMELTING_ROUTE, 
  LEATHER_ROUTE, 
  STONE_ROUTE, 
  WEAVE_ROUTE, 
  WOOD_ROUTE 
} from "./utils/consts";

import Home from "./pages/Home";
import Smelting from "./pages/Smelting";
import Weaving from "./pages/Weaving";
import Woodworking from "./pages/Woodworking";
import Leatherworking from "./pages/Leatherworking";
import Stonecutting from "./pages/Stonecutting";

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
    title: 'Home'
  },
  {
    path: SMELTING_ROUTE,
    Component: Smelting,
    title: 'Smelting'
  },
  {
    path: LEATHER_ROUTE,
    Component: Leatherworking,
    title: 'Leatherworking'
  },
  {
    path: STONE_ROUTE,
    Component: Stonecutting,
    title: 'Stonecutting'
  },
  {
    path: WEAVE_ROUTE,
    Component: Weaving,
    title: 'Weaving'
  },
  {
    path: WOOD_ROUTE,
    Component: Woodworking,
    title: 'Woodworking'
  },
]