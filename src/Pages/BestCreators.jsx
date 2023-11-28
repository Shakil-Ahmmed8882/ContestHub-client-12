import TitleDescription from "../Components/Ui/TitleDescription ";
import useGetOpenData from "../Hooks/useGetOpenData";
import Spinner from "../Shared/Spinner";
import crown from "../assets/img/crown.png";
import crown1 from "../assets/img/crown1.png";
import crown2 from "../assets/img/crown2.png";
import InfoCard from "./Demo/InfoCard";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';


const BestCreators = () => {
  const crowns = [crown, crown1, crown2];
  const descriptions = [
    "Lorem ipsum dolor sit amet, consecte adipiscing elit sed do",
    "Lorem ipsum dolor sit amet, consecte adipiscing elit sed do",
    "Lorem ipsum dolor sit amet, consecte adipiscing elit sed do",
  ];
  const {
    data = [],
    isLoading,
    refetch,
  } = useGetOpenData("/allContestCreators");

  if(isLoading) return <Spinner></Spinner>
  // Assuming data is an array of objects with a 'rate' property

  let sortedRatedCreator = []
  if(data){
     const foundContest = data?.slice().sort((a, b) => {
      // Assuming 'rate' is a numerical property
      return b.bestCreatorRating - a.bestCreatorRating; // Ascending order, use b.rate - a.rate for descending order
    });

    sortedRatedCreator.push(foundContest)

  }

  const bestThreeContestCreator = sortedRatedCreator?.slice(0, 3);

  return (
    <div className="font-bold bg-white  text-5xl py-20">
      <div className="max-w-5xl mx-auto">
      <TitleDescription
        top_SmallText={"Contest winners"}
        title="Champion Spotlight"
        description="Celebrating the Champion of Our Latest Contest! Hey you! lest's join us."></TitleDescription>
      <div className="flex gap-5"></div>

      <div className=" grid grid-cols-1 md:grid-cols-2 justify-center gap-5  items-center">
        {bestThreeContestCreator?.map((creator, idx) => (
          <div key={creator._id} className={`relative ${idx == 0?'col-span-2':'md:col-span-1',idx == 2?"col-span-2":""}`}>

            <div className="relative">
            <InfoCard
              idx={idx}
              name={creator?.name}
              contestName={
                creator?.participationDetails?.wonContests[0]
              }
              crown={crowns[idx]}
              description={descriptions[idx]}
              photoURL={creator?.photoURL}
              rating={creator?.bestCreatorRating}
              ></InfoCard>

            </div>
          </div>
        ))}
      </div>

      </div>

      
    </div>
  );
};

export default BestCreators;
