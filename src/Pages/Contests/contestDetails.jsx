import { Link, useParams } from "react-router-dom";
import useGetOpenData from "../../Hooks/useGetOpenData";
import calculateRemainingDeadline from "../../Utils/calculateRemainingDeadline";
import { useEffect, useState } from "react";

const ContestDetails = () => {
  const { id } = useParams();
  const { data: contest, isLoading } = useGetOpenData(`contest?id=${id}`);

  const [timeRemaining, setTimeRemaining] = useState(null);

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

  return (
    <div className="flex w-full h-screen">
      <div className="bg-gray-200 flex-1">
        <img className="w-full h-40 object-cover" src={image} alt={contestName} />
        <h2>{contestName}</h2>
        <p>
          <span>icon</span>Attempted: {participants?.length}
        </p>
        <p>{description}</p>
        <p>{winnerID}</p>
        <p>
          {timeRemaining && !timeRemaining.expired ? (
            <>
              Days: {timeRemaining.days} Hours: {timeRemaining.hours} Minutes: {timeRemaining.minutes} Seconds: {timeRemaining.seconds}
            </>
          ) : (
            ""
          )}
        </p>
        <Link className="btn bg-green-500 text-white" to='/payment'>Contest Registration -&ls; payment</Link>
      </div>
      <div className="bg-primary flex-1"></div>
    </div>
  );
};

export default ContestDetails;