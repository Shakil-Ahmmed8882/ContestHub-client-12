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


const Profile = () => {
  const { user, loading } = useAuth() || {};
  const [openChat, setOpenChat] = useState(false);
  const handleChat = () => {
    setOpenChat(!openChat);
  };

  const handleClose = () => {
    setOpenChat(!openChat);
  };

  if (loading) return "loading";
  const img =
    "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div>
      <div className=" bg-[#c7d2fe96] rounded-lg">
        <div className="flex  py-8 px-3   justify-between">
          <h1 className="text-3xl font-bold">Welcome {user?.displayName} 👋</h1>
          <p>Here is what’s happening with your projects today:</p>
          <button
            onClick={handleChat}
            className="btn hover:bg-[#5650f9] text-white bg-primary w-[230px]">
            chat with us
          </button>
        </div>
      </div>
      <div className="grid  grid-cols-2 gap-3 p-8 justify-center ">
        <div className="shadow-lg w-full">
          <ChartComponent></ChartComponent>
        </div>
        <div className="space-y-8">
          <div className="card w-96 bg-base-100 shadow-xl">
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
          <div className="card w-96 bg-base-100 shadow-xl">
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
          <div className="card w-96 bg-base-100 shadow-xl">
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
