import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import AllApps from "../pages/AllApps/AllApps";
import AppDetails from "../pages/AppDetails/AppDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error></Error>,
    children: [
        {
            index: true,
            loader: () => fetch('homeData.json'),
            path: '/',
            Component: Home
        },
        {
          path: '/apps',
          loader: () => fetch('allApp.json'),
          Component: AllApps
        },
        {
          path:'/appDetails/:id',
          loader: () => fetch('./allApp.json'),
          Component: AppDetails
        },
        {
          path:'/apps/appDetails/:id',
          loader: () => fetch('./allApp.json'),
          Component: AppDetails
        }
    ]
  },
]);

