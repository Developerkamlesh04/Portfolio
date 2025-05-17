import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "./Layout";
import About from "./About"; 

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Layout />,
      },
      
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
