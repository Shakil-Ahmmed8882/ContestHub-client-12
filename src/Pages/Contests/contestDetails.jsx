import { Link, useParams } from "react-router-dom";
import useGetOpenData from "../../Hooks/useGetOpenData";

const ContestDetails = () => {
  const { id } = useParams();
  const { data: contest, isLoading } = useGetOpenData(`contest?id=${id}`);

  if (isLoading) return "loading...";

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
    <div className="flex w-full  h-screen">
      <div className="bg-gray-200 flex-1">
        <img className="w-full h-40 object-cover" src={image} />
        <h2>{contestName}</h2>
        <p>
          <span>icon</span>Attempted:{participants?.length}
        </p>
        <p>{description}</p>
        <p>{winnerID}</p>
        <p>{deadline} (dynamic timer will change in real time. calculate and subtract)</p>
        <Link className="btn bg-green-500 text-white">Contest Registration -&ls; payment</Link>

      </div>
      <div className="bg-primary flex-1"></div>
    </div>
  );
};

export default ContestDetails;
