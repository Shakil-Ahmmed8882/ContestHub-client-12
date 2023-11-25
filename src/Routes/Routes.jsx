import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLaout from "../Layout/MainLaout";
import Home from "../Pages/Home";
import SignUp from "../Components/Ui/Form/SignUp";
import SignIn from "../Components/Ui/Form/SignIn";
import AllContents from "../Pages/Contests/AllContents";
import DashboardLayout from "../Layout/DashboardLayout";
import SubmissionDetails from "../Pages/Dashboard/User/SubmissionDetails";
import WininingContests from "../Pages/Dashboard/User/WininingContests";
import UpcomingContests from "../Pages/Dashboard/User/UpcomingContests";
import Profile from "../Pages/Dashboard/User/Profile";
import ParticipatedContests from "../Pages/Dashboard/User/ParticipatedContests";
import ContestDetails from "../Pages/Contests/contestDetails";

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
      {
        path: "/contest/:id",
        element: <ContestDetails></ContestDetails>,
      },
    ],
  },

  // Dashboard
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <Profile>;</Profile>,
      },
      {
        path: "submissionDetails",
        element: <SubmissionDetails></SubmissionDetails>,
      },
      {
        path: "participatedContest",
        element: <ParticipatedContests></ParticipatedContests>,
      },
      {
        path: "winningContests",
        element: <WininingContests></WininingContests>,
      },
      {
        path: "UpcomingContests",
        element: <UpcomingContests></UpcomingContests>,
      },
    ],
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
