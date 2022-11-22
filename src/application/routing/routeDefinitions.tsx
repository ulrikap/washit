import Booking from "@view/pages/Booking/Booking";
import Landing from "@view/pages/Landing/Landing";
import Overview from "@view/pages/Overview/Overview";
import { RouteProps } from "react-router";

export const routeDefinitions: Array<RouteProps> = [
  {
    path: "",
    element: <Landing />,
  },
  {
    path: "/overview",
    element: <Overview />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
];
