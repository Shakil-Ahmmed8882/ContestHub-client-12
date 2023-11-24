import {
      createBrowserRouter,
      RouterProvider,
    } from "react-router-dom";
import MainLaout from "../Layout/MainLaout";
import Home from "../Pages/Home";
import SignUp from "../Components/Ui/Form/SignUp";
import SignIn from "../Components/Ui/Form/SignIn";
import AllContents from "../Pages/AllContents";
    
export const router = createBrowserRouter([
      {
        path: "/",
        element: <MainLaout></MainLaout>,
        children:[
            {
                  index:true,
                  element:<Home></Home>
            },
            {
                  path:'/allContests',
                  element:<AllContents></AllContents>
            }
        ]
      },
      {
        path:'signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'signIn',
        element:<SignIn></SignIn>
      }
    ]);
