import { NavLink } from "react-router-dom";

const AdminRoutes = () => {
  return (
    <div className="flex flex-col justify-center">
      <NavLink className="p-2 hover:bg-[#333A48 m-3" to="/">
        Admin home
      </NavLink>
      <NavLink
        className="p-2 hover:text-gray-200 text-[19px]"
         to={`/dashboard/profile`}>
         Profile
      </NavLink>
      <NavLink
        className="p-2 hover:text-primary   mx-1 text-[13px]"
        to="/dashboard/manageContest">
        Manage contest
      </NavLink>
      <NavLink
        className="p-2 hover:text-primary   mx-1 text-[13px]"
        to="/dashboard/manageUser">
        Manage user
      </NavLink>
      <NavLink
        className="p-2 hover:text-primary   mx-1 text-[13px]"
        to="/dashboard/contestCreators">
        Contest Creators
      </NavLink>
    </div>
  );
};

export default AdminRoutes;
