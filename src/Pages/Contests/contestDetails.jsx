import { Link, useParams } from "react-router-dom";
import useGetOpenData from "../../Hooks/useGetOpenData";
import calculateRemainingDeadline from "../../Utils/calculateRemainingDeadline";
import { useEffect, useState } from "react";
import Spinner from "../../Shared/Spinner";

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
    return <div>Loading...</div>;
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
    winnerID,
    type,
    participants,
  } = contest;

  console.log(timeRemaining?.expired);
  const a = true;

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={image}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2 flex-1">
                <Link
                  to="/allContests"
                  className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full btn font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  See all contests
                </Link>
              </div>
              <div className="w-1/2 px-2">
                <Link
                  to={`/payment/${id}`}
                  className="w-full btn bg-primary dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-[#5c47ff] dark:hover:bg-gray-700">
                  Register a contest
                </Link>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              <h2>{contestName}</h2>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>
            <div className="flex mb-4">
              <div className="mr-4 flex items-center gap-1">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Contest winner
                </span>
                {timeRemaining?.expired ? (
                  <span className="text-[20px] dark:text-gray-300 ml-2 text-accent font-bold">
                    {winners?.length}
                  </span>
                ) : (
                  <div className="w-6 ">
                    <Spinner></Spinner>
                  </div>
                )}
              </div>
              <div>
                <div>
                  <div className="flex mr-2">
                    {timeRemaining?.expired &&
                      winners.map((winner) => {
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
            {/* <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300">
            Select Color:
          </span>
          <div className="flex items-center mt-2">
            <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2" />
            <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2" />
            <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2" />
            <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2" />
          </div>
        </div> */}

            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Select Size:
              </span>
              <div className="flex items-center mt-2">
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  S
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  M
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  L
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XL
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XXL
                </button>
              </div>
            </div>
            <div>
              <p className="flex items-center gap-3">
                <span>icon</span>Attempted: {participants?.length}
                <p className="text-3xl">
                  {timeRemaining && !timeRemaining.expired ? (
                    <div>
                       {timeRemaining.days}{timeRemaining.hours}{" "}h {timeRemaining.minutes}m
                      <span className="text-xl font-bold text-blue-500">
                        <span className="countdown">
                          <span style={{ "--value": timeRemaining.seconds}}></span>
                        </span>
                        <span className="text-gray-400">s</span>
                          
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </p>
              </p>
              <p>{winnerID}</p>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Contest Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                <p className="">{description}</p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis
                dapibus augue vel ipsum pretium, et venenatis sem blandit.
                Quisque ut erat vitae nisi ultrices placerat non eget velit.
                Integer ornare mi sed ipsum lacinia, non sagittis mauris
                blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt
                mi consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestDetails;
