import { useState } from "react";
import BarChat from "../../../Components/Ui/Chart/BarChat";
import ChartComponent from "../../../Components/Ui/Chart/MixBarChart";
import useAuth from "../../../Hooks/useAuth";
import AvaterGroup from "./AvaterGroup";
import SupportChatBox from "../../Demo/SupportChatBox";

// icons
import { BsGearFill } from "react-icons/bs";
import { BsFillAirplaneFill } from "react-icons/bs";
import { AiOutlineWechat } from "react-icons/ai";
import Example from "../../../Components/Ui/Chart/MixBarChart";
import useGetSecureData from "../../../Hooks/useGetSecureData";
import Spinner from "../../../Shared/Spinner";
import { useEffect } from "react";
import UserProfileDashboard from "./UserProfileDashboard";


const Profile = () => {
  const { user, loading } = useAuth() || {};
  const {data,isLoading} = useGetSecureData(`/user/${user?.email}`)
  const [openChat, setOpenChat] = useState(false);
  const [attempted, setAttempted] = useState(0);
  const [wonContests, setWonContests] = useState(0)
  const handleChat = () => {
    setOpenChat(!openChat);
  };

  const handleClose = () => {
    setOpenChat(!openChat);
  };


  
  useEffect(() => {
    // Check if 'data' is available and has the required properties
    if (data?.attemptedContests?.length > 0) {
      setAttempted(data.attemptedContests.length);

      // Check if 'wonContests' property exists in 'data' and has a length
      if (data.wonContests?.length > 0) {
        setWonContests(data.wonContests.length);
      }
    }
  }, [data]); // Update when 'data' changes


  if (loading) return "loading";
  const img =
    "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";



    
  if(isLoading) return <Spinner></Spinner>
  

  
  
  // Replace this with the actual attempted count

   // Replace this with the actual total contest count

  return (
    <div>
      <div className=" bg-[#fff] border-b-4 mx-4 mb-3 rounded-lg">
        <div className="flex  py-8 px-3 items-center    justify-between">
          <h1 className="text-3xl font-bold">Welcome {user?.displayName} 👋</h1>
          <p>Here is what’s happening with your projects today:</p>
          <button
            onClick={handleChat}
            className="btn hover:bg-[#5650f9] text-white bg-primary w-[230px]">
            chat with us
          </button>
        </div>
      </div>

      <div className=" grid grid-cols-4 gap-8 px-4 mt-4 mb-8 justify-center">
      <div className="col-span-2">
        <div className="shadow-lg bg-white mb-5 rounded-lg col-span-2">
          <UserProfileDashboard></UserProfileDashboard>
        </div>
          <div className="shadow-lg p-2 bg-white rounded-lg">
        <Example attempted={attempted} won={wonContests} />
          </div>
        </div>
        <div className="space-y-8">
          <div className="card w-[450px] bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-3">
                <div className=" p-3 bg-indigo-500 shadow-lg rounded-full">
                <BsGearFill className="text-3xl text-white font-bold"></BsGearFill>
                </div>

                <h2 className="card-title">Creativity</h2>
              </div>
                <progress className="progress w-56 my-3" value="10" max="100"></progress>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <p className="text-3xl">4%</p>
              </div>
            </div>
          </div>
          {/* ================== */}
          <div className="card w-[450px] bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-3">
                <div className=" p-3 bg-[#FF9113] shadow-lg rounded-full">
                <BsFillAirplaneFill className="text-3xl text-white font-bold"></BsFillAirplaneFill>

                </div>

                <h2 className="card-title">Productivity</h2>
              </div>
              <div className="card-actions justify-end">
              </div>
              <p className="text-3xl">80%</p>
            </div>
          </div>
          {/* ================== */}
          <div className="card w-[450px] bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-3">
                <div className=" p-3 bg-[#1AB8EF] shadow-lg rounded-full">
                <AiOutlineWechat className="text-3xl text-[#fff] font-bold"></AiOutlineWechat>

                </div>

                <h2 className="card-title">Social Net</h2>
              </div>
              <div className="card-actions justify-end">
              </div>
              <p className="text-3xl">20%</p>
            </div>
          </div>
        </div>
      </div>

      {openChat ? (
        <div className="fixed bottom-0 right-0">
          <SupportChatBox handleClose={handleClose}></SupportChatBox>{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Profile;
