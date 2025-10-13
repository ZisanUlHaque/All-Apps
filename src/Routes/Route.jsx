import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";



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
        }
    ]
  },
]);

