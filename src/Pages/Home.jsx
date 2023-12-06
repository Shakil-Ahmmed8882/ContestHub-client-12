import Navbar from "../Components/Header/Navbar";
import Banner from "./Demo/ComingSoon";
import Popular from "./Popular";
import Winners from "./Winners";
import BestCreators from "./BestCreators";
const Home = () => {
 

  return (
    <div>
      {/* home <h1 className="text-5xl">Earch image</h1>
      <div className="flex">
        <h1 className="flex-1">hello</h1>
        <div className="w-[300px] h-[300px]">
      <img  className="flex-1  object-cover" src={arrowDrawLine} alt="" />
        </div>
      </div> */}
      <Banner></Banner>
      
      {/* <ReplaceThis></ReplaceThis> */}
      <Popular></Popular>
      <Winners></Winners>
      <BestCreators></BestCreators>
      {/* <App></App> */}
      <div className="bg-gray-400">

      </div>
    </div>
  );
};

export default Home;
