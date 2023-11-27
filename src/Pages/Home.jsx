import Navbar from "../Components/Header/Navbar";
import App from "../Components/Ui/Chart/App";
import Banner from "./Demo/ComingSoon";
import FAQ from "./Demo/FAQ";
import Payment from "./Payment/Payment";
import Popular from "./Popular";
import earth from '../assets/img/earth.png'
import wired from '../assets/img/wired.gif'
import arrow from '../assets/img/arrow.gif'
import arrowDrawLine from '../assets/img/wired-outline-1419-polyline.gif'
import ReplaceThis from "./Demo/ReplaceThis";
const Home = () => {
 

  return (
    <div>
      home <h1 className="text-5xl">Earch image</h1>
      <div className="flex">
        <h1 className="flex-1">hello</h1>
        <div className="w-[300px] h-[300px]">
      <img  className="flex-1  object-cover" src={arrowDrawLine} alt="" />
        </div>
      </div>
      <Banner></Banner>
      <ReplaceThis></ReplaceThis>
      <Popular></Popular>
      <App></App>
    </div>
  );
};

export default Home;
