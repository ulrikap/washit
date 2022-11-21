import Overview from "@view/pages/Overview/Overview";
import { RouteProps } from "react-router";

export const routeDefinitions: Array<RouteProps> = [
  {
    path: "",
    element: <Overview />,
  },
];
