import { Link, useParams } from "react-router-dom";
import useGetOpenData from "../../Hooks/useGetOpenData";
import calculateRemainingDeadline from "../../Utils/calculateRemainingDeadline";
import { useEffect, useState } from "react";
import Spinner from "../../Shared/Spinner";
import { BiDollarCircle } from "react-icons/bi";
import { BsClockFill } from "react-icons/bs";
import { AiFillNotification } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

const ContestDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetOpenData(`contest?id=${id}`);
  const [timeRemaining, setTimeRemaining] = useState("");
  const contest = data?.contest;
  const winners = data?.winners;
  useEffect(() => {
    if (contest && contest.deadline) {
      const timer = setInterval(() => {
        const remaining = calculateRemainingDeadline(contest.deadline);
        setTimeRemaining(remaining);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [contest]);

  if (isLoading) {
    return <Spinner></Spinner>
  }

  if (!contest) {
    return <div>Contest not found</div>;
  }

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
    creatorID,
    winnerID = [],
    type,
    participants,
  } = contest;

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" -mx-4">
          <div className="md:grid grid-cols-6 md:flex-1 px-4">
            <div className=" col-span-2 rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover object-top"
                src={image}
                alt="Product Image"
              />
            </div>

            <div className=" pl-4 flex-1 bg-white  col-span-4 p-3">
              <div>
                <h2 className="font-bold  md:text-3xl lg:text-4xl  dark:text-white mb-2">
                  <h2>{contestName}</h2>
                </h2>
                <p className=" text-gray-500  text-[15px]">
                  {description} Ensure your honesty, respect and right manners to the other participants. Remember we all together can create better world by the efforteless and respectfull collaboration.
                </p>
                

                <div>
                  <h2 className="font-bold pt-3 text-[18px] text-gray-500 mt-4">Instruction</h2>
                  <p className="text-gray-500">{taskSubmissionInstructions}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <h2 className="font-bold text-[18px] text-gray-500">Prize money</h2>
                  <div className="flex gap-1 items-center">
                  <BiDollarCircle className="text-[22px] text-blueAccent "></BiDollarCircle>
                  <p className="text-gray-500">{prizeMoney}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center  -mx-2">
                <div className="md:flex-1 px-2 bg-white  textWhite ">
                  <div className="flex ">
                    <div className="md:flex gap-3 items-center ">
                      <div>
                        <div className=" flex space-y-6 gap-1">
                          <span className="text-gray-500 font-bold text-[18px] flex items-center gap-2 dark:text-gray-300">
                            Contest winner
                          </span>

                          {timeRemaining?.expired ? (
                            <span className="text-[20px] dark:text-gray-300  text-accent font-bold">
                              {Array.isArray(winners) ? winners.length : 0}
                            </span>
                          ) : (
                          "coming soon"
                          )}
                        </div>
                        <p className="flex flex-col  text-gray-500 text-[20px] font18old mt-1 gap-3">
                          Attempted: {participants?.length}
                          <p className="flex w-[200px] items-center gap-2">
                            <BsClockFill className="text-2xl text-blueAccent "></BsClockFill>
                            {timeRemaining && !timeRemaining.expired ? (
                              <div>
                                <span className="text-orange-500">
                                  {timeRemaining.days} d
                                </span>
                                <span className="">
                                  {timeRemaining.hours}h
                                  <span className="text-green-500">
                                    {timeRemaining.minutes}m
                                  </span>
                                </span>
                                <span className="text-xl font-bold text-redAccent">
                                  <span className="countdown">
                                    <span
                                      style={{
                                        "--value": timeRemaining.seconds,
                                      }}></span>
                                  </span>
                                  <span className="text-gray-400">s</span>
                                </span>
                              </div>
                            ) : (
                              ""
                            )}
                          </p>
                        </p>
                      </div>
                      {/* ----------------- */}
                      <div className=" md:ml-11  bg-green-50 relative shadow-sm mb-8">
                        <AiFillNotification className="absolute -top-2 -right-1 text-4xl rotate-180 text-redAccent"></AiFillNotification>
                        <div className="flex items-center gap-2 py-8 px-3">
                          <AiFillCheckCircle className="text-[20px] text-green-400"></AiFillCheckCircle>
                          <p>
                            hurry up. Don&apos;t miss the scope before time is
                            up
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="flex mr-2">
                          {timeRemaining?.expired &&
                            winners?.map((winner) => {
                              return (
                                <img
                                  key={winner._id}
                                  className="border-2 border-white rounded-full h-10 object-cover w-11 -mr-6"
                                  src={winner?.photoURL}
                                  alt={winner?.photoURL}
                                />
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* =============== */}
                  <div>
                    <div className="px-2 flex md:justify-end mt-20">
                      <Link to={`/payment/${_id}`}>
                        <button className="btn btn-outline flex-1 btn-primary">
                          Register a contest
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestDetails;
