import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";


const MainLaout = () => {
      return (
            <div>
                  <Navbar></Navbar>  
                  <div className="max-w-[1050px] mx-auto -z-10">

                  <Outlet></Outlet>
                  </div>
            </div>
        
      );
};

export default MainLaout;