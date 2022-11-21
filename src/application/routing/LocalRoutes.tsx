import { Route, Routes } from "react-router";
import { routeDefinitions } from "./routeDefinitions";

const LocalRoutes = () => (
  <Routes>
    {routeDefinitions.map((item, index) => (
      <Route key={index} {...item} />
    ))}
  </Routes>
);

export default LocalRoutes;
