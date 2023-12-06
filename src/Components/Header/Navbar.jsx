import { Link, NavLink, useLocation } from "react-router-dom";
import { LinksGenerator } from "./LinksGenerator";
import { linksData } from "./LinkData";
import Avater from "./Avater";
import useAuth from "../../Hooks/useAuth";
const Navbar = () => {
  const { user,loading, logOut } = useAuth();
  const location = useLocation()
  const isDashboard = location.pathname.includes('dashboard')
  // login and logout link
  const signInLink = (
    <li>
      <NavLink to="/signIn">Sign in</NavLink>
    </li>
  );



  // Setting user profile image dynamically
  const profileImg = user?.photoURL?user?.photoURL:'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  return (
    <div className="bg-transparent  relative z-50">

        <div className="navbar  max-w-[1000px] mx-auto ">
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
        <div className="text-[23px] flex items-center gap-3 font-bold">
          <img className="w-[50px]" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2f899b52-daf8-4098-83fe-5c5e27b69915/d54rzmz-da46f7ef-dec6-40fd-bb9a-c7902e9424c1.png/v1/fill/w_800,h_545/indigo_lantern_batman_logo_idea_by_kalel7_d54rzmz-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQ1IiwicGF0aCI6IlwvZlwvMmY4OTliNTItZGFmOC00MDk4LTgzZmUtNWM1ZTI3YjY5OTE1XC9kNTRyem16LWRhNDZmN2VmLWRlYzYtNDBmZC1iYjlhLWM3OTAyZTk0MjRjMS5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.a0tATER2IPKgkNvcw8br76HRchRRfMqfcQRG-H4ShRg" alt="" />
          <span>
          Contest<span className="text-primary">Hub</span>
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {LinksGenerator(linksData)}
          {!user ? signInLink:
          <li><Link to='/dashboard'> Dashboard</Link> </li>
          }
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
