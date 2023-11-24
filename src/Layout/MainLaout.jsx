import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";


const MainLaout = () => {
      return (
            <div className='max-w-[1050px] mx-auto -z-10'>
                  <Navbar></Navbar>  
                  <Outlet></Outlet>
            </div>
        
      );
};

export default MainLaout;