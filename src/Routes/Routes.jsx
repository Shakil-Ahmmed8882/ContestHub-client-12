import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLaout from "../Layout/MainLaout";
import Home from "../Pages/Home";
import SignUp from "../Components/Ui/Form/SignUp";
import SignIn from "../Components/Ui/Form/SignIn";
import AllContents from "../Pages/AllContents";
import DashboardLayout from "../Layout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLaout></MainLaout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allContests",
        element: <AllContents></AllContents>,
      },
    ],
  },

  // Dashboard
  {
    path:'dashboard',
    element:<DashboardLayout></DashboardLayout>,
    children:[
      {
        index:true,
        element:<div className="text-9xl">profile</div>
      }
    ]
  },

  // login logout form
  {
    path: "signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "signIn",
    element: <SignIn></SignIn>,
  },
]);
