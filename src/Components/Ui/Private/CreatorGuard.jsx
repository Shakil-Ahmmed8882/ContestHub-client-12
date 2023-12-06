import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useCreator from "../../../Hooks/useCreator";
import Spinner from "../../../Shared/Spinner";



const CreatorGuard = ({children}) => {
  const {user, loading} = useAuth()
  const [isCreator,isCreatorLoading] = useCreator()
  const location = useLocation();


  
  if (loading || isCreatorLoading) {
        return <Spinner></Spinner>
      }
      
      
  if (user && isCreator) {
    return children;
  }
  return <Navigate to="/signIn" state={{ from: location }} replace></Navigate>;
};

export default CreatorGuard;
