import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import AdminRoutes from '../Pages/Dashboard/Admin/AdminRoutes'
import CreatorRoutes from '../Pages/Dashboard/Contest_Creator/CreatorRoutes'
import UserRoutes from '../Pages/Dashboard/User/UserRoutes'
import useAdmin from "../Hooks/useAdmin";
import Spinner from "../Shared/Spinner";
import useCreator from "../Hooks/useCreator";
const DashboardLayout = () => {
  const [isAdmin, isAdminLoading] = useAdmin()
  const [isCreator,isCreatorLoading] = useCreator()

  if(isAdminLoading) return <Spinner></Spinner>
  // const isAdmin = true
  
  const isUser = false;
  // const isCreator = false;

  let routesComponent;

  if (isAdmin) {
    routesComponent = <AdminRoutes/>
  } else if (isUser) {
    routesComponent = <UserRoutes />;
  } else if (isCreator) {
    routesComponent = <CreatorRoutes />;
  } else {
    routesComponent = <UserRoutes />;
  }

  return (
    <div className="grid grid-cols-5 w-[100%]">
      <div className="w-72 text-3xl sticky top-0 bg-indigo-600 text-white col-span-1 h-screen">
      {/* https://dribbble.com/shots/23095596-UI-Concept-of-Parcel-Delivery-Dashboard */}
        {routesComponent}
      </div>
      <div className="col-span-4 bg-[#FFFFFF]">
        <Navbar />
        <div className="pl-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;