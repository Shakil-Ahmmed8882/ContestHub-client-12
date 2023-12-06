import { NavLink, useMatch } from "react-router-dom";

const UserRoutes = () => {
  const homeMatch = useMatch("/dashboard");
  const allContestsMatch = useMatch("/dashboard");


  return (
    <div className="flex mt-2 border-t flex-col  ">
      <NavLink className="p-2  " to="/">
        User home
      </NavLink>
   
      <NavLink
        className="p-2 hover:text-gray-200 text-[19px]"
        active={allContestsMatch} to={`/dashboard/home`}>
      Dashboard
      </NavLink>
      <NavLink
        className="p-2 hover:text-gray-200 text-[19px]"
        active={allContestsMatch} to={`/dashboard/profile`}>
        My Profile
      </NavLink>
      <NavLink
        className="p-2 hover:text-gray-200 text-[19px]"
        active={allContestsMatch} to={`/dashboard/registeredContests`}>
        Registered 
      </NavLink>
      <NavLink
        className="p-2 hover:text-gray-200 text-[19px]"
        active={allContestsMatch} to={`/dashboard/submissionDetails`}>
        submission 
      </NavLink>
      <NavLink
        className="p-2 hover:text-gray-200 text-[19px]"
        active={allContestsMatch} to={`/dashboard/winningContests`}>
        My wining 
      </NavLink>
      <NavLink
        className="p-2 hover:text-gray-200 text-[19px]"
        active={allContestsMatch} to={`/dashboard/UpcomingContests`}>
        Upcoming contests
      </NavLink>
    </div>
  );
};

export default UserRoutes;
