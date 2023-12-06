import CustomizedSteppers from '../Components/Ui/Stepper/Stepper';
import TitleDescription from '../Components/Ui/TitleDescription ';
import winnerImg from '../assets/img/winner-isometric-21a26.svg'
import celebration from '../assets/img/celebration.gif'
import LogoCount from './Demo/LogoCount';
import { BiCrown } from "react-icons/bi";
import VerticalLinearStepper from './Demo/VerticalSteppers';


const Winners = () => {
      return (
            <div className='py-16 relative bg-white'>
            <div className='max-w-6xl mx-3 md:mx-auto'>
                  <TitleDescription
                  top_SmallText={'are you?'}
                  title={"Winners"}
                  description={"Here  are all of our winnners did fantastic job. Their dedication brought them here. Are you going to be any of them?"}
                  ></TitleDescription>
                  {/* <VerticalLinearStepper></VerticalLinearStepper> */}
                  <CustomizedSteppers></CustomizedSteppers>
                  <div className=' grid md:flex items-center  justify-center'>
                  <img className='w-[70%] hidden lg:flex md:absolute -left-11 top-0 mx-auto rotate-12 md:w-[20%]' src={celebration} alt="" />
                  <img className='w-[70%] absolute -right-11 bottom-0 -rotate-90 mx-auto md:w-[20%]' src={celebration} alt="" />
                  {/* ============== */}     
                  </div>
            </div>
            <div className="stats shadow">
  
  
  
</div>
            </div>

      );
};

export default Winners;