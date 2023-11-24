import { Outlet } from "react-router-dom";
import UserRoutes from "../Pages/Dashboard/User/UserRoutes";
import Navbar from "../Pages/Dashboard/Navbar/Navbar";

const DashboardLayout = () => {
  return (
      <div className="grid grid-cols-10 w-[100%]">
            <div className="w-72 bg-[#1E293B] col-span-2 h-screen">
                  <UserRoutes></UserRoutes>
            </div>
            <div className="col-span-8 bg-[#F1F5F9]">
                  <Navbar></Navbar>
                  <Outlet></Outlet>
            </div>
      </div>
  );
};

export default DashboardLayout;
