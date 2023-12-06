import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import AdminRoutes from "../Pages/Dashboard/Admin/AdminRoutes";
import CreatorRoutes from "../Pages/Dashboard/Contest_Creator/CreatorRoutes";
import UserRoutes from "../Pages/Dashboard/User/UserRoutes";
import useAdmin from "../Hooks/useAdmin";
import Spinner from "../Shared/Spinner";
import useCreator from "../Hooks/useCreator";
import useAuth from "../Hooks/useAuth";
const DashboardLayout = () => {
  const [isAdmin, isAdminLoading] = useAdmin();

  const [isCreator, isCreatorLoading] = useCreator();
  const {user} = useAuth()
  if (isAdminLoading || isCreatorLoading) return <Spinner></Spinner>;
  // const isAdmin = true

  // const isCreator = false;

  let routesComponent;

  if (isAdmin) {
    routesComponent = <AdminRoutes />;
  } else if (isCreator) {
    routesComponent = <CreatorRoutes />;
  } else {
    routesComponent = <UserRoutes />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 w-[100%]">
      <div className="w-72 py-3 text-left pl-8 text-[20px]  sticky top-0 hidden md:block  bg-indigo-600 text-white col-span-1 h-screen">
        {/* avater */}
        <div className="avatar md:flex pl-3 ">
          <div className="w-24 rounded-full ring border-4 border-[#fff] overflow-hidden ring-offset-base-100 ring-offset-2">
            <img src={user.photoURL?user.photoURL:'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
          </div>
        </div>
          <p className="mt-5 text-gray-300">{user.displayName?user.displayName:'Anonymous'}</p>
          <p className="mt-1 text-gray-300">{user.email?user.email.slice(0,20) + '..':'Anonymous'}</p>
        {routesComponent}
      </div>
      <div className="col-span-4 z-10 bg-[#FFFFFF]">
        <Navbar />
        <div className="pl-2 bg-[#F4F4F6]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
