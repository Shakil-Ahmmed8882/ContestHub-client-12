// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./CheckOutForm";

// const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

// const Payment = () => {

// // ============= Stripe payment ==================

// // ============= Stripe payment ==================

//   return(
//     <div>
//       <Elements stripe={stripePromise}>
//         <CheckoutForm></CheckoutForm>
//       </Elements>

//     </div>
//   )

// };

// export default Payment;

// // /*

//=============================================
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import usePublicApi from "../../Hooks/usePublicApi";
import { ToasMessage } from "../../Utils/ToastMessage";
import useAuth from "../../Hooks/useAuth";
import { ToastError } from "../../Utils/ToastError";
import TitleDescription from "../../Components/Ui/TitleDescription ";
import useGetOpenData from "../../Hooks/useGetOpenData";
import Spinner from "../Demo/Spinner";
import { BsCurrencyDollar, BsEyeFill, BsFillPeopleFill, BsToggleOn } from "react-icons/bs";


const contestRegistrationData = {

  



  planName: 'Scale',
  pricePerMonth: '$19',
  billingFrequency: 'USD / mo',
  billedYearly: 'Billed yearly ($220)',
  features: [
    'Advanced invoicing',
    'Easy to use accounting',
    'Mutli-accounts',
    'Tax planning toolkit',
    'VAT & VATMOSS filing',
    'Free bank transfers'
  ]
};

const Payment = () => {
  const {id} = useParams()
  const { data, isLoading } = useGetOpenData(`contest?id=${id}`);
  const xios = usePublicApi()
  const {user} = useAuth()
  const goTo = useNavigate()
  const handlePayment = async() => {
    const res = await xios.post('registeredContest',{id:id,userEmail:user?.email})
    if(res.data.modifiedCount > 0){
      ToasMessage("Registered")
      goTo('/allContests')
    } else{
      ToastError(res.data.error)
    }

  }


  if(isLoading) return <Spinner></Spinner>
 
  const contestData = data?.contest

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
    winnerID,
    type,
    creatorID,
    participants,
  } = contestData


  return (
<div>
      
      <div className="bg-gray-50 mb-8">
        <main className="flex ">
      


        <div className="relative w-full bg-indigo-50">
              {/* Overlapping background */}
              <div
                aria-hidden="true"
                className="absolute hidden h-6 w-full bg-gray-50 lg:block"
              />
          
              <h2 className="sr-only">Plans</h2>
              {/* Toggle */}
             
              {/* Cards */}
              <div className="relative mx-auto mt-8 max-w-2xl px-6 pb-8 sm:mt-12 lg:max-w-7xl lg:px-8 lg:pb-0">
                {/* Decorative background */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 top-4 bottom-6 left-8 right-8 hidden rounded-tl-lg rounded-tr-lg bg lg:block"
                />
                <div className="relative space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0">
            
                  <div className="bg-white ring-2 ring-indigo-700 relative shadow-md pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12">
                      <BsFillPeopleFill className="text-6xl relative top-1 left-28   text-gray-400"></BsFillPeopleFill>
                            <div className=" ml-8 mt-2 flex rounded-lg relative  items-center gap-1">
                      <div className="relative ml-24 mb-5">

                        <p className="w-6 h-4 py-3 my-2 absolute -right-3 bg-blend-multiply  rounded-full bg-[#00A7F5] flex text-white  items-center justify-center">
                    </p>
                      <p className="w-6 h-4 py-3 my-2  rounded-full bg-redAccent bg-blend-multiply flex text-white  items-center justify-center">
                    </p>

                      </div>
                    </div>
                    <div>
                      <p className="flex gap-1">
                    <svg
                          className="text-indigo-500 w-5 h-5 flex-shrink-0"
                          x-description="Heroicon name: mini/check"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p>{contestName}</p>
                        
                      </p >
                
                      <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                        <div className="mt-3 flex justify-center items-center">
                          <p className="text-indigo-600 text-4xl font-bold tracking-tight">
                            ${prizeMoney}
                          </p>
                          <div className="ml-4">
                            <p className="text-gray-700 text-sm">USD / mo</p>
                            <p className="text-gray-500 text-sm">
                              Billed yearly ($220)
                            </p>
                          </div>
                        </div>
                        <button onClick={()=> handlePayment()}
                          href="#"
                          className="bg-indigo-600 text-white hover:bg-indigo-700 mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full">
                          Register
                        </button>
                      </div>
                    </div>
                    <h4 className="sr-only">Features</h4>
                    <ul
                      role="list"
                      className="border-gray-200 divide-gray-200 mt-7 border-t divide-y lg:border-t-0">
                      <li className="flex items-center py-3">
                        <svg
                          className="text-indigo-500 w-5 h-5 flex-shrink-0"
                          x-description="Heroicon name: mini/check"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600 ml-4 text-sm font-medium">
                          Advanced invoicing
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <svg
                          className="text-indigo-500 w-5 h-5 flex-shrink-0"
                          x-description="Heroicon name: mini/check"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600 ml-4 text-sm font-medium">
                          Easy to use accounting
                        </span>
                      </li>
                  
                      <li className="flex items-center py-3">
                        <svg
                          className="text-indigo-500 w-5 h-5 flex-shrink-0"
                          x-description="Heroicon name: mini/check"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600 ml-4 text-sm font-medium">
                          Tax planning toolkit
                        </span>
                      </li>
                      
                    </ul>
                  </div>
             
                </div>
              </div>
         <h1 className="text-9xl">img</h1>
            </div>

        </main>
      </div>
    </div>
  );
};

export default Payment;
//=============================================
