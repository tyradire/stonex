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

import smeltingIcon from './assets/smelting.webp';
import leatherworkingIcon from './assets/leatherworking.webp';
import stonecuttingIcon from './assets/stonecutting.webp';
import weavingIcon from './assets/weaving.webp';
import woodworkingIcon from './assets/woodworking.webp';

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
    title: 'Home'
  },
  {
    path: SMELTING_ROUTE,
    Component: Smelting,
    title: 'Smelting',
    image: smeltingIcon
  },
  {
    path: LEATHER_ROUTE,
    Component: Leatherworking,
    title: 'Leatherworking',
    image: leatherworkingIcon
  },
  {
    path: STONE_ROUTE,
    Component: Stonecutting,
    title: 'Stonecutting',
    image: stonecuttingIcon
  },
  {
    path: WEAVE_ROUTE,
    Component: Weaving,
    title: 'Weaving',
    image: weavingIcon
  },
  {
    path: WOOD_ROUTE,
    Component: Woodworking,
    title: 'Woodworking',
    image: woodworkingIcon
  },
]