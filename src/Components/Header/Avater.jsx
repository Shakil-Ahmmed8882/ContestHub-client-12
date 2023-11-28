import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Avater = ({ img }) => {
  const { user, logOut } = useAuth();
  const goTo = useNavigate()

  const handleSignOut = () => {
    logOut()
    .then(()=> goTo('/'))
  }


  const signInLink = (
    <li>
      <NavLink to="/signIn">Sign in</NavLink>
    </li>
  );




  const logOutLink = (
    <li>
      <button className="w-32" onClick={() => handleSignOut()}>
        Sign out
      </button>
    </li>
  );

  return (
    <div className="dropdown cursor-pointer dropdown-end">
      <label tabIndex={0} className="m-1">
        <div className="avatar w-[44px] online cursor-pointer">
          <div className="w-full rounded-full">
            <img src={img} />
          </div>
        </div>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">

        <li className="cursor-default">
          {
            user?.displayName
          }
        </li>
        <li><Link to='/dashboard'> Dashboard</Link> </li>
        {user ? logOutLink : signInLink}
      </ul>
    </div>
  );
};

export default Avater;
