import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";

export const routing = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
];
