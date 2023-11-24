import { NavLink } from "react-router-dom";

const UserRoutes = () => {
      return (
       <div className="flex flex-col justify-center ">
            <NavLink className='hover:text-primary m-3' to='/fj'>Profile</NavLink>
            <NavLink className='hover:text-primary m-3' to='/fj/'>Home</NavLink>
            <NavLink className='hover:text-primary m-3' to='/'>participated contests</NavLink>
            <NavLink className='hover:text-primary m-3' to='/'>submission details</NavLink>
            <NavLink className='hover:text-primary m-3' to='/'>My wining contests</NavLink>
            <NavLink className='hover:text-primary m-3' to='/'>Upcoming contests</NavLink>
       </div>
      );
};

export default UserRoutes;