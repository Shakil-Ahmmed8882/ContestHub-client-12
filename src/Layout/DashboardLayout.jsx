import { Outlet } from "react-router-dom";
import UserRoutes from "../Pages/Dashboard/User/UserRoutes";
import Navbar from "../Pages/Dashboard/Navbar/Navbar";

const DashboardLayout = () => {
  return (
      <div className="grid grid-cols-5 w-[100%]">
            <div className="w-72 bg-[#FAFBFC] col-span-1 h-screen">
                  <UserRoutes></UserRoutes>
            </div>
            <div className="col-span-4 bg-[#FFFFFF]">
                  <Navbar></Navbar>
                  <div className="pl-2">
                  <Outlet></Outlet>

                  </div>
            </div>
      </div>
  );
};

export default DashboardLayout;
