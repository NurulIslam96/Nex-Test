import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Attendance from "../pages/Attendance";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/attendance",
    element: <Attendance></Attendance>,
  },
]);
