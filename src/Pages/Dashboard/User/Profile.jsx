import useAuth from "../../../Hooks/useAuth";
import AvaterGroup from "./AvaterGroup";
import Welcome from "./Welcome";

const Profile = () => {
  const { user } = useAuth() || {};
  const img =
    "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold bg-[#C7D2FE]">
          Welcome {user?.displayName}  👋
        </h1>
        <p>Here is what’s happening with your projects today:</p>
      </div>
      <AvaterGroup img={img}></AvaterGroup>
      <h1 className="text-8xl font-bold">Profile</h1>
    </div>
  );
};

export default Profile;
