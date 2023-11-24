import { Outlet } from "react-router-dom";
import UserRoutes from "../Pages/Dashboard/User/UserRoutes";

const DashboardLayout = () => {
  return (
      <div className="grid grid-cols-10 w-[100%]">
            <div className="w-72 bg-wite col-span-2 h-screen">
                  <UserRoutes></UserRoutes>
            </div>
            <div className="bg-blue-100 col-span-8">
                  <Outlet></Outlet>
            </div>
      </div>
  );
};

export default DashboardLayout;
