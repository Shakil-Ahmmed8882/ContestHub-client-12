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
import ContestDetails from "../Pages/Contests/contestDetails";
import Payment from "../Pages/Payment/Payment";
import PrivateRoute from "../Components/Ui/Private/PrivateRoute";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser";
import ManageContest from "../Pages/Dashboard/Admin/ManageContest";
import AddContest from "../Pages/Dashboard/Contest_Creator/AddContest";
import MyCreatedContests from "../Components/Ui/Form/MyCreatedContests";
import EditContest from "../Pages/Dashboard/Contest_Creator/EditContest";
import MySubmittedPaage from "../Pages/Dashboard/Contest_Creator/MySubmittedPaage";
import RegisteredContest from "../Pages/Dashboard/User/RegisteredContest";
import AllContestCreators from "../Pages/Dashboard/Admin/AllContestCreators";

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
        element: (
          <PrivateRoute>
            <ContestDetails></ContestDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/:id",
        element: <Payment></Payment>,
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
        path: "registeredContests",
        element: <RegisteredContest></RegisteredContest>,
      },
      {
        path: "winningContests",
        element: <WininingContests></WininingContests>,
      },
      {
        path: "UpcomingContests",
        element: <UpcomingContests></UpcomingContests>,
      },

      // Admin
      {
        path: "manageUser",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "contestCreators",
        element: <AllContestCreators></AllContestCreators>,
      },
      {
        path: "manageContest",
        element: <ManageContest></ManageContest>,
      },
      //Creator
      {
        path:"addContest",
        element:<AddContest></AddContest>
      },
      {
        path:"createContest",
        element:<MyCreatedContests></MyCreatedContests>
      },
      {
        path:"edit/:id",
        element:<EditContest></EditContest>
      },
      {
        path:"MySubmittedPage/:id",
        element:<MySubmittedPaage></MySubmittedPaage>
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
