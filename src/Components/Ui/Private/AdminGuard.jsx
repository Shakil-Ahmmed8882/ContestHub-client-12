import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import useAuth from "../../../Hooks/useAuth";
import Spinner from "../../../Shared/Spinner";



const AdminGuard = ({children}) => {
  const {user, loading} = useAuth()
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();


  console.log(isAdmin)

  if (loading || isAdminLoading) {
    return <Spinner></Spinner>
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/signIn" state={{ from: location }} replace></Navigate>;
};

export default AdminGuard;
