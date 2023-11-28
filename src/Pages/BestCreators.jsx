import TitleDescription from "../Components/Ui/TitleDescription ";
import useGetOpenData from "../Hooks/useGetOpenData";
import Spinner from "../Shared/Spinner";
import crown from "../assets/img/crown.png";
import crown1 from "../assets/img/crown1.png";
import crown2 from "../assets/img/crown2.png";
import InfoCard from "./Demo/InfoCard";

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
  if (isLoading) return <Spinner />;

  // Assuming data is an array of objects with a 'rate' property
  const sortedRatedCreator = data?.slice().sort((a, b) => {
    // Assuming 'rate' is a numerical property
    return b.bestCreatorRating - a.bestCreatorRating; // Ascending order, use b.rate - a.rate for descending order
  });

  const bestThreeContestCreator = sortedRatedCreator?.slice(0, 3);

  return (
    <div className="font-bold  text-5xl">
      <TitleDescription
        top_SmallText={"Contest winners"}
        title="Champion Spotlight"
        description="Celebrating the Champion of Our Latest Contest! Hey you! lest's join us."></TitleDescription>
      <div className="flex gap-5"></div>

      <div className=" flex flex-wrap justify-center gap-3  items-center">
        {bestThreeContestCreator?.map((creator, idx) => (
          <div key={creator._id} className={`relative ${idx == 0?'col-span-2':'col-span-1',idx == 2?"col-span-2":""}`}>

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

      <div
        className="hero min-h-screen max-w-5xl mx-auto"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-80 bg-[#e9e9ff]"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestCreators;
