import useAuth from "../../../Hooks/useAuth";
import ParticipationCount from "../../../Layout/ParticipationCount";
import AvaterGroup from "./AvaterGroup";
import Welcome from "./Welcome";

const Profile = () => {
  const { user, loading } = useAuth() || {};

  if(loading) return 'loading'
  const img =
    "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold bg-[#C7D2FE]">
          Welcome {user?.displayName} 👋
        </h1>
        <p>Here is what’s happening with your projects today:</p>
      </div>
      <ParticipationCount></ParticipationCount>

      
      
      
      
      <AvaterGroup img={img}></AvaterGroup>
      <h1 className="text-8xl font-bold">Profile</h1>
      {/* diff */}
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
            Hello {user?.displayName}
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 text-9xl font-black grid place-content-center">
            Hello {user?.displayName}
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  );
};

export default Profile;
