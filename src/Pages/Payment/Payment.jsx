import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {

// ============= Stripe payment ==================


// ============= Stripe payment ==================



  return(
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>

    </div>
  )
  
  

};

export default Payment;



// /*

// */<div className="bg-gray-50 mb-8">
//   <main>
//     {/* Pricing section */}
//     <div>
//       <div className="relative bg-indigo-600">
//         {/* Overlapping background */}
//         <div
//           aria-hidden="true"
//           className="absolute bottom-0 hidden h-6 w-full bg-gray-50 lg:block"
//         />
//         <div className="relative mx-auto max-w-2xl px-6 pt-16 text-center sm:pt-32 lg:max-w-7xl lg:px-8">
//           <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
//             <span className="block lg:inline">Simple pricing,</span>
//             <span className="block lg:inline">no commitment.</span>
//           </h1>
//           <p className="mt-4 text-xl text-indigo-100">
//             Everything you need, nothing you don't. Pick a plan that best suits
//             your business.
//           </p>
//         </div>
//         <h2 className="sr-only">Plans</h2>
//         {/* Toggle */}
//         <div className="relative mt-12 flex justify-center sm:mt-16">
//           <div className="flex rounded-lg bg-indigo-700 p-0.5">
//             <button
//               type="button"
//               className="relative whitespace-nowrap rounded-md border-indigo-700 bg-white py-2 px-6 text-sm font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
//             >
//               Monthly billing
//             </button>
//             <button
//               type="button"
//               className="relative ml-0.5 whitespace-nowrap rounded-md border border-transparent py-2 px-6 text-sm font-medium text-indigo-200 hover:bg-indigo-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
//             >
//               Yearly billing
//             </button>
//           </div>
//         </div>
//         {/* Cards */}
//         <div className="relative mx-auto mt-8 max-w-2xl px-6 pb-8 sm:mt-12 lg:max-w-7xl lg:px-8 lg:pb-0">
//           {/* Decorative background */}
//           <div
//             aria-hidden="true"
//             className="absolute inset-0 top-4 bottom-6 left-8 right-8 hidden rounded-tl-lg rounded-tr-lg bg-indigo-700 lg:block"
//           />
//           <div className="relative space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0">
//             <div className="bg-indigo-700 lg:bg-transparent pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12">
//               <div>
//                 <h3 className="text-white text-base font-semibold">Starter</h3>
//                 <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
//                   <div className="mt-3 flex items-center">
//                     <p className="text-white text-4xl font-bold tracking-tight">
//                       $5
//                     </p>
//                     <div className="ml-4">
//                       <p className="text-white text-sm">USD / mo</p>
//                       <p className="text-indigo-200 text-sm">
//                         Billed yearly ($56)
//                       </p>
//                     </div>
//                   </div>
//                   <a
//                     href="#"
//                     className="bg-white text-indigo-600 hover:bg-indigo-50 mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
//                   >
//                     Buy Starter
//                   </a>
//                 </div>
//               </div>
//               <h4 className="sr-only">Features</h4>
//               <ul
//                 role="list"
//                 className="border-indigo-500 divide-indigo-500 divide-opacity-75 mt-7 border-t divide-y lg:border-t-0"
//               >
//                 <li className="flex items-center py-3">
//                   <svg
//                     className="text-indigo-200 w-5 h-5 flex-shrink-0"
//                     x-description="Heroicon name: mini/check"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span className="text-white ml-4 text-sm font-medium">
//                     Basic invoicing
//                   </span>
//                 </li>
//                 <li className="flex items-center py-3">
//                   <svg
//                     className="text-indigo-200 w-5 h-5 flex-shrink-0"
//                     x-description="Heroicon name: mini/check"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span className="text-white ml-4 text-sm font-medium">
//                     Easy to use accounting
//                   </span>
//                 </li>
//                 <li className="flex items-center py-3">
//                   <svg
//                     className="text-indigo-200 w-5 h-5 flex-shrink-0"
//                     x-description="Heroicon name: mini/check"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span className="text-white ml-4 text-sm font-medium">
//                     Mutli-accounts
//                   </span>
//                 </li>
//               </ul>
//             </div>
//             <div className="bg-white ring-2 ring-indigo-700 shadow-md pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12">
//               <div>
//                 <h3 className="text-indigo-600 text-base font-semibold">
//                   Scale
//                 </h3>
//                 <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
//                   <div className="mt-3 flex items-center">
//                     <p className="text-indigo-600 text-4xl font-bold tracking-tight">
//                       $19
//                     </p>
//                     <div className="ml-4">
//                       <p className="text-gray-700 text-sm">USD / mo</p>
//                       <p className="text-gray-500 text-sm">
//                         Billed yearly ($220)
//                       </p>
//                     </div>
//                   </div>
//                   <a
//                     href="#"
//                     className="bg-indigo-600 text-white hover:bg-indigo-700 mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
//                   >
//                     Buy Scale
//                   </a>
//                 </div>
//               </div>
//               <h4 className="sr-only">Features</h4>
//               <ul
//                 role="list"
//                 className="border-gray-200 divide-gray-200 mt-7 border-t divide-y lg:border-t-0"
//               >
//                 <li className="flex items-center py-3">
//                   <svg
//                     className="text-indigo-500 w-5 h-5 flex-shrink-0"
//                     x-description="Heroicon name: mini/check"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span className="text-gray-600 ml-4 text-sm font-medium">
//                     Advanced invoicing
//                   </span>
//                 </li>
//                 <li className="flex items-center py-3">
//                   <svg
//                     className="text-indigo-500 w-5 h-5 flex-shrink-0"
//                     x-description="Heroicon name: mini/check"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span className="text-gray-600 ml-4 text-sm font-medium">
//                     Easy to use accounting
//                   </span>
//                 </li>
//                 <li className="flex items-center py-3">
//                   <svg
//                     className="text-indigo-500 w-5 h-5 flex-shrink-0"
//                     x-description="Heroicon name: mini/check"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span className="text-gray-600 ml-4 text-sm font-medium">
//                     Mutli-accounts
//                   </span>
//                 </li>
//                 <li className="flex items-center py-3">
//                   <svg
//                     className="text-indigo-500 w-5 h-5 flex-shrink-0"
//                     x-description="Heroicon name: mini/check"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span className="text-gray-600 ml-4 text-sm font-medium">
//                     Tax planning toolkit
//                   </span>
//                 </li>
//                 <li className="flex items-center py-3">
//                   <svg
//                     className="text-indigo-500 w-5 h-5 flex-shrink-0"
//                     x-description="Heroicon name: mini/check"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span className="text-gray-600 ml-4 text-sm font-medium">
//                     VAT &amp; VATMOSS filing
//                   </span>
//                 </li>
//                 <li className="flex items-center py-3">
//                   <svg
//                     className="text-indigo-500 w-5 h-5 flex-shrink-0"
//                     x-description="Heroicon name: mini/check"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span className="text-gray-600 ml-4 text-sm font-medium">
//                     Free bank transfers
//                   </span>
//                 </li>
//               </ul>
//             </div>
//             <div className="bg-indigo-700 lg:bg-transparent pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12">
//               <div>
//                 <h3 className="text-white text-base font-semibold">Growth</h3>
//                 <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
//                   <div className="mt-3 flex items-center">
//                     <p className="text-white text-4xl font-bold tracking-tight">
//                       $12
//                     </p>
//                     <div className="ml-4">
//                       <p className="text-white text-sm">USD / mo</p>
//                       <p className="text-indigo-200 text-sm">
//                         Billed yearly ($140)
//                       </p>
//                     </div>
//                   </div>
//                   <a
//                     href="#"
//                     className="bg-white text-indigo-600 hover:bg-indigo-50 mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
//                   >
//                     Buy Growth
//                   </a>
//                 </div>
//               </div>
//               <h4 className="sr-only">Features</h4>
//               <ul
//                 role="list"
//                 className="border-indigo-500 divide-indigo-500 divide-opacity-75 mt-7 border-t divide-y lg:border-t-0"
//               >
//                 <li className="flex items-center py-3">
//                   <svg
//                     className="text-indigo-200 w-5 h-5 flex-shrink-0"
//                     x-description="Heroicon name: mini/check"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span className="text-white ml-4 text-sm font-medium">
//                     Basic invoicing
//                   </span>
//                 </li>
//                 <li className="flex items-center py-3">
//                   <svg
//                     className="text-indigo-200 w-5 h-5 flex-shrink-0"
//                     x-description="Heroicon name: mini/check"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span className="text-white ml-4 text-sm font-medium">
//                     Easy to use accounting
//                   </span>
//                 </li>
//                 <li className="flex items-center py-3">
//                   <svg
//                     className="text-indigo-200 w-5 h-5 flex-shrink-0"
//                     x-description="Heroicon name: mini/check"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span className="text-white ml-4 text-sm font-medium">
//                     Mutli-accounts
//                   </span>
//                 </li>
//                 <li className="flex items-center py-3">
//                   <svg
//                     className="text-indigo-200 w-5 h-5 flex-shrink-0"
//                     x-description="Heroicon name: mini/check"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span className="text-white ml-4 text-sm font-medium">
//                     Tax planning toolkit
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </div>
   
//   </main>
// </div>