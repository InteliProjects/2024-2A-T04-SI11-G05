import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Registers } from "./pages";
import { Criteria } from "./pages/criterios/criteria.component";
import { Details } from "./pages/perfis/detalhes/details.component";
import Dashboard from "./pages/dashboard/dashboard.component";

const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/perfis",
        element: <Registers />,
      },
      {
        path: "/criterios",
        element: <Criteria />,
      },
      {
        path: "/perfis/:id",
        element: <Details />,
      },
    ],
  },
]);

export const BaseRoutes = () => {
  return <RouterProvider router={router} />;
};
