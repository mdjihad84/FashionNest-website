import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Home from "../Pages/HomePage/Home.jsx";
import AttarPage from "../Pages/AttarPage/AttarPage.jsx";
import PanjabiPage from "../Pages/PanjabiPage/PanjabiPage.jsx";
import TshartPage from "../Pages/TshartPage/TshartPage.jsx";
import Trouser from "../Pages/Trouser/Trouser.jsx";
import Food from "../Pages/Food/Food.jsx";
import Login from "../Pages/Login/Login.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "AttarPage",
        element: <AttarPage />,
      },
      {
        path: "PanjabiPage",
        element: <PanjabiPage/>,
      },
      {
        path: "TshartPage",
        element: <TshartPage/>,
      },
      {
        path: "Trouser",
        element: <Trouser/>,
      },
      {
        path: "Food",
        element: <Food/>,
      },
      {
        path: "Login",
        element: <Login/>,
      },
    ],
  },
]);