import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import AllApps from "../pages/AllApps/AllApps";
import AppDetails from "../pages/AppDetails/AppDetails";
import InstallApp from "../pages/InstallApp/InstallApp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: () => fetch("/homeData.json").then(res => res.json()),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/allApp.json").then(res => res.json()),
        Component: AllApps,
      },
      {
        path: "/appDetails/:id",
        loader: () => fetch("/allApp.json").then(res => res.json()),
        Component: AppDetails,
      },
      {
        path: "/installation",
        loader: () => fetch("/allApp.json").then(res => res.json()),
        Component: InstallApp,
      },
      // Remove duplicate route to avoid conflicts
    ],
  },
]);
