import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Pages/Demo/Footer";


const MainLaout = () => {
      return (
            <div>
                  
                  <Navbar></Navbar>  
                  <div >
                  <Outlet></Outlet>
                  <div className="max-w-[1050px] mx-auto ">
                  <Footer></Footer>
                  </div>

                  </div>
            </div>
        
      );
};

export default MainLaout;