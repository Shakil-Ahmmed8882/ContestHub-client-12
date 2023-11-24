import { Link, NavLink } from "react-router-dom";
import { LinksGenerator } from "./LinksGenerator";
import { linksData } from "./LinkData";
import Avater from "./Avater";
import useAuth from "../../Hooks/useAuth";
const Navbar = () => {
  const { user, logOut } = useAuth();

  // login and logout link
  const signInLink = (
    <li>
      <NavLink to="/signIn">Sign in</NavLink>
    </li>
  );


  // Setting user profile image dynamically
  const profileImg = user?.photoURL?user?.photoURL:'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  return (
    <div className="">

    <div className="navbar bg-white px-40">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {LinksGenerator(linksData)}
          </ul>
        </div>
        <div className="text-[23px] font-bold">
          Contest<span className="text-primary">Craft</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {LinksGenerator(linksData)}
          {!user && signInLink}
          {user && <li><Link to='/dashboard'> Dashboard</Link> </li>}
        </ul>
      </div>
      {/* Profile  */}
      {user && (
        <div className="navbar-end">
          <Avater img={profileImg}></Avater>
        </div>
      )}
    </div>

    </div>
  );
};

export default Navbar;
