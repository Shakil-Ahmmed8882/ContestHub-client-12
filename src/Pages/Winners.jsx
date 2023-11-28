import CustomizedSteppers from '../Components/Ui/Stepper/Stepper';
import TitleDescription from '../Components/Ui/TitleDescription ';
import winnerImg from '../assets/img/winner-isometric-21a26.svg'
import celebration from '../assets/img/celebration.gif'


const Winners = () => {
      return (

            <div className='py-16'>
            <div className='max-w-6xl mx-3 md:mx-auto'>
                  <TitleDescription
                  top_SmallText={'are you?'}
                  title={"Winners"}
                  description={"Here are all of our winnners did fantastic job. Their dedication brought them here. Are you going to be any of them?"}
                  ></TitleDescription>
                  <CustomizedSteppers></CustomizedSteppers>
                  <div className=' grid md:flex items-center justify-center'>
                  <img className='w-[70%] mx-auto md:w-[30%]' src={celebration} alt="" />
                  {/* ============== */}
                  <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-right">
            <div className="text-sm font-semibold tracking-wide texri text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base">
              New version 3
            </div>
            <h2 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-6xl lg:text-4xl ">
              DataGuard Pro
            </h2>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              DataGuard Pro is a cutting-edge data protection and security
              software solution designed to safeguard your sensitive information
              and keep your digital assets secure.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="rounded-md shadow">
                <a
                  href="/docs"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10">
                  Documentation
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 ">
                <a
                  href=""
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 md:py-4 md:text-lg md:px-10">
                  Tutorial
                </a>
              </div>
            </div>
          </div>

                  </div>
            </div>

            </div>

      );
};

export default Winners;