import React from "react";
import { Link } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";

// icons
import { BsCodeSlash } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";
import { BsFillAirplaneFill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineWechat } from "react-icons/ai";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";



const colors = ["red", "blue", "green"];

const TabContents = ({ contestItem, idx }) => {
  const {
    _id,
    contestName,
    image,
    description,
    prizeMoney,
    taskSubmissionInstructions,
    tags,
    deadline,
    status,
    winnerID,
    type,
    creatorID,
    participants,
  } = contestItem;

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        rel="stylesheet"
      />
        <div className="antialiased    text-gray-900 min-h-[100px] relative">
        <div className=" relative rounded-lg h-full w-full">
          <div className="relative ">
         
            <div className=" bg-white inset-0 opacity-20 mix-blend-multiply rounded-t-lg" />
          </div>
          <div className="p-6 rounded-lg bg-white text-black ">
          <img
              className="w-11 h-11  border-2 border-[#8d8888]  rounded-full object-bottom "
              src={image || "https://via.placeholder.com/600x400"}
              alt={contestName || "Contest Image"}
            />
            {/* Rest of the content */}
            <div className="flex mt-4 items-baseline">{/* ... */}</div>
            <h4 className="font-bold text-[19px] leading-tight truncate">
              {contestName || "Beautiful Home in the countryside"}
            </h4>
              <p className="text-[16px] text-gray-500 mt-2">
              {description.length > 50?description.slice(0,40):description + "we are happy to see you in contestHub"}
            </p>
            {/* ... */}
              <div className=" mt-2 flex rounded-lg  items-center gap-1">
              <BsFillPeopleFill className="text-[24px] text-gray-400"></BsFillPeopleFill>Participants
              <p className="w-11 h-4 py-3 my-2  rounded-full bg-[#00A7F5] flex text-white  items-center justify-center">
            {participants.length}
            </p>
            </div>
              <div className=" font-bold mt-2 flex w-[150px]  rounded-lg  items-center gap-1">
              <BsCurrencyDollar className="font-bold text-2xl text-gray-500"></BsCurrencyDollar>
              <p className="text-white flex bg-redAccent px-5 py-1 text-[13px] rounded-lg font-bold  items-center justify-center">
            {prizeMoney}
            </p>
            </div>
            <div className="flex gap-3 items-center ">
            
            </div>
              <Link className="flex text-indigo-500 gap-2 relative  justify-end cursor-pointer  items-center text-[17px]" to={`/contest/${_id}`}>
                view
              <BsEyeFill className=""></BsEyeFill>
              </Link>
        <BsToggleOn className="absolute top-6 right-6 text-2xl text-gray-400 "></BsToggleOn>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabContents;
