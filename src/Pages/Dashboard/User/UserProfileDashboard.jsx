import useAuth from "../../../Hooks/useAuth";
import UserSocial from "./UserSocial";

const UserProfileDashboard = () => {
      const {user} = useAuth()
  return (
    <div>
      <div className=" dark:bg-slate-800  gap-6 flex ">
        <div className=" dark:bg-gray-700 relative overflow-hidden  group rounded-xl p-5 transition-all duration-500 transform">
          <div className="flex items-center gap-4">
          <img
        className="object-cover object-center h-32"
        src={user?.photoURL || "https://www.svgrepo.com/show/493509/person-who-invests.svg"}
        alt="Woman looking front"
      />
            <div className="w-80 transition-all transform duration-500">
              <h1 className="text-gray-600 text-[23px] dark:text-gray-200 font-bold">
                {user?.displayName}
              </h1>
              <p className="text-gray-400">Junior Developer</p>
              <a className="text-xs text-gray-500 dark:text-gray-200 ">
                {user?.email}
          <UserSocial></UserSocial>
              </a>
            </div>
            
          </div>
          
          <div className="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg">
            <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
                  
            </div>
          </div>
        </div>
        {/*  */}
        <div>
      
          

        </div>
      </div>
    </div>
  );
};

export default UserProfileDashboard;
