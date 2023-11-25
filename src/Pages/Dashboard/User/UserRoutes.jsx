import { NavLink } from "react-router-dom";

const UserRoutes = () => {
  return (
    <div className="flex flex-col justify-center">
      <NavLink className="p-2 hover:bg-[#333A48 m-3" to="/">
        Home
      </NavLink>
      <NavLink
        className="p-2 flex items-center gap-2 black-bg hover:bg-[#333A48] text-white m-3"
        to="/dashboard">
        <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
          <path
            className="fill-current text-indigo-500"
            d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"></path>
          <path
            className="fill-current text-indigo-600"
            d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"></path>
          <path
            className="fill-current text-indigo-200"
            d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"></path>
        </svg>
        <span>
        Dashobard{" "}

        </span>
      </NavLink>
      <NavLink
        className="p-2 hover:text-primary   mx-1 text-[13px]"
        to="/dashboard/participatedContest">
        participated contests
      </NavLink>
      <NavLink
        className="p-2 hover:text-primary   mx-1 text-[13px]"
        to="/dashboard/submissionDetails">
        submission details
      </NavLink>
      <NavLink
        className="p-2 hover:text-primary   mx-1 text-[13px]"
        to="/dashboard/winningContests">
        My wining contests
      </NavLink>
      <NavLink
        className="p-2 hover:text-primary   mx-1 text-[13px]"
        to="/dashboard/UpcomingContests">
        Upcoming contests
      </NavLink>
    </div>
  );
};

export default UserRoutes;
