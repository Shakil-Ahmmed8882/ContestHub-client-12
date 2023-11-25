import { Outlet } from "react-router-dom";
import UserRoutes from "../Pages/Dashboard/User/UserRoutes";
import Navbar from "../Components/Header/Navbar";
import AdminRoutes from "../Pages/Dashboard/Admin/AdminRoutes";

const DashboardLayout = () => {
      const isAdmin = true
  return (
      <div className="grid grid-cols-5 w-[100%]">
            <div className="w-72 bg-[#FAFBFC] col-span-1 h-screen">
                  {
                        isAdmin?<AdminRoutes></AdminRoutes>:
                        <UserRoutes></UserRoutes>
                  }
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
