import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:"/signup",
                element:<SignUp></SignUp>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ] 
    }
])