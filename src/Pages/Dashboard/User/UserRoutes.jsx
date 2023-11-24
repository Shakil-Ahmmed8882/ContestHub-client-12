import { NavLink } from "react-router-dom";

const UserRoutes = () => {
      return (
       <div className="flex flex-col justify-center ">
            <NavLink className='hover:text-primary m-3' to='/'>Home</NavLink>
            <NavLink className='hover:text-primary m-3' to='/dashboard'>Profile</NavLink>
            <NavLink className='hover:text-primary m-3' to='/dashboard/participatedContest'>participated contests</NavLink>
            <NavLink className='hover:text-primary m-3' to='/dashboard/submissionDetails'>submission details</NavLink>
            <NavLink className='hover:text-primary m-3' to='/dashboard/winningContests'>My wining contests</NavLink>
            <NavLink className='hover:text-primary m-3' to='/dashboard/UpcomingContests'>Upcoming contests</NavLink>
       </div>
      );
};

export default UserRoutes;