import { useRoutes } from "react-router-dom";
import { routing } from "./index";

const AppRoute = () => {
  const routingConfig = useRoutes(routing);

  return routingConfig;
};

export default AppRoute;
