// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';

// const ClaimOfferPage: React.FC = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');

//   return (
//     <div className="min-h-screen bg-[#f0d5ff] flex items-center justify-center p-4">
//       <div className="bg-white w-full max-w-[900px] rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
//         {/* Left Section */}
//         <div className="bg-[#f0d5ff] p-6 md:w-1/2 flex flex-col justify-between">
//           <div className="flex items-start">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-purple-600">
//               <path d="M11.645 20.91l-.007-.003-.022-.012a15.456 15.456 0 01-.383-.218 25.994 25.994 0 01-4.658-3.773C2.8 14.165 1 11.015 1 7.775 1 4.976 3.342 3 5.5 3c1.057 0 2.055.397 2.912 1.061C8.265 3.397 9.198 3 10.5 3c2.045 0 3.846 1.58 4.3 3.468a1 1 0 001.94-.412C15.58 3.332 13.10 1 10.5 1 9.015 1 7.69 1.548 6.727 2.46 5.765 1.548 4.439 1 3 1 .243 1 0 3.739 0 7.775c0 3.8 2.013 7.36 5.135 9.975a28.6 28.6 0 004.708 3.818l.018.01.006.003a1 1 0 00.97-1.752z" />
//             </svg>
//             <div className="ml-2">
//               <h2 className="text-xl font-bold text-purple-600">Claim Your Offer</h2>
//             </div>
//           </div>
          
//           <div className="mt-4">
//             <h1 className="text-3xl font-bold text-gray-800 mb-4">
//               30% OFF & 150% Cashback
//               <br />
//               On Your First Order!
//             </h1>
//             <p className="text-gray-600 mb-4">
//               Hello, we have a special ongoing offer for our new customers to avail 30% OFF & 150% Cashback on their first assignment with us. We are committed to delivering the premium service despite an affordable price. Enter your phone number below to get the coupon code. (we do not spam)
//             </p>
//           </div>
          
//           <div className="mt-auto">
//             <p className="font-semibold text-gray-800">Susan White</p>
//             <p className="text-sm text-gray-600">Head Of Sales Departments</p>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="bg-white p-6 md:w-1/2 flex flex-col justify-center">
//           <div className="text-center mb-6">
//             <h3 className="text-xl font-bold text-gray-800 mb-2">Get Your Exclusive Code</h3>
//             <p className="text-gray-600">Type your WhatsApp Number to get an exclusive Code.</p>
//           </div>
          
//           <div className="mb-4">
//             <div className="flex rounded-lg border border-gray-300">
//               <div className="relative">
//                 <select className="appearance-none bg-white pl-3 pr-8 py-3 rounded-l-lg border-r border-gray-300 text-gray-700">
//                   <option>🇺🇸 +1</option>
//                 </select>
//                 <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//               </div>
//               <input
//                 type="tel"
//                 placeholder="Enter your WhatsApp number"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 className="flex-grow px-3 py-3 outline-none text-gray-700"
//               />
//             </div>
//           </div>
          
//           <button 
//             className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
//           >
//             Get Offer on WhatsApp
//           </button>
          
//           <div className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
//             </svg>
//             We do not spam
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimOfferPage;

// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';
// import crown from "@/public/Vector.png"
// import Image from 'next/image';
// const ClaimOfferPage = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');

//   return (
//     <div className=" py-16 bg-[#f5f3ef] flex items-center justify-center p-4">
//       <div className="bg-[#eabaff] w-full max-w-6xl h-[380px] rounded-3xl overflow-hidden flex flex-col md:flex-row p-14">
//         {/* Left Section */}
//         <div className="md:w-1/2 flex flex-col justify-between pr-14">
//           <div>
//             <div className="  mb-4">
//               <Image src={crown} alt="crown" className="w-8 h-8 left-0"  />
//               <h2 className="text-2xl font-bold text-publack ml-2"> Claim Your Offer</h2>
//             </div>
            
//             <p className="text-black mb-6">
//               Hello, we have a special ongoing offer for our new customers to avail 30% OFF & 150% Cashback on their first assignment with us. We are committed to delivering the premium service despite an affordable price. Enter your phone number below to get the coupon code. (we do not spam)
//             </p>
//           </div>
          
//           <div className="mt-auto">
//             <p className="font-semibold text-black">Susan White</p>
//             <p className="text-black-sm text-black">Head Of sales Departments</p>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="md:w-1/2 flex flex-col justify-center mt-6 md:mt-0">
//           <h1 className="text-3xl font-bold text-publack mb-4">
//             30% OFF & 150% Cashback<br/>
//             On Your First Order!
//           </h1>
          
//           <p className="text-black mb-4">
//             Type your WhatsApp Number to get an exclusive Code.
//           </p>
          
//           <div className="mb-4">
//             <div className="flex rounded-full border border-gray-300 bg-white overflow-hidden">
//               <div className="relative flex items-center px-3 bg-white border-r border-gray-300">
//                 <img src="/api/placeholder/24/16" alt="USA flag" className="w-6 h-4 mr-1" />
//                 <span className="text-black">+1</span>
//                 <ChevronDown className="ml-1 text-black" size={16} />
//               </div>
//               <input
//                 type="tel"
//                 placeholder="Enter your whatsapp number"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 className="flex-grow px-4 py-3 outline-none text-black bg-white"
//               />
//             </div>
//           </div>
          
//           <button 
//             className="w-full bg-[#a414d5] text-black py-3 rounded-full hover:bg-purple-700 transition-colors font-semibold"
//           >
//             Get Offer on WhatsApp
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimOfferPage;

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import crown from "@/public/Vector.png"
import Image from 'next/image';

const ClaimOfferPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="py-8 sm:py-12 md:py-16 bg-[#f5f3ef] flex items-center justify-center p-4">
      <div className="bg-[#eabaff] w-full max-w-6xl rounded-3xl overflow-hidden flex flex-col md:flex-row p-6 sm:p-8 md:p-10 lg:p-14 h-auto md:h-[380px]">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-between md:pr-6 lg:pr-14 mb-6 md:mb-0">
          <div>
            <div className="flex items-center mb-4">
              <Image src={crown} alt="crown" className="w-8 h-8 left-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-publack ml-2">Claim Your Offer</h2>
            </div>
            
            <p className="text-black mb-6 text-sm sm:text-base">
              Hello, we have a special ongoing offer for our new customers to avail 30% OFF & 150% Cashback on their first assignment with us. We are committed to delivering the premium service despite an affordable price. Enter your phone number below to get the coupon code. (we do not spam)
            </p>
          </div>
          
          <div className="mt-4 md:mt-auto">
            <p className="font-semibold text-black">Susan White</p>
            <p className="text-black-sm text-black text-sm">Head Of sales Departments</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-publack mb-4">
            30% OFF & 150% Cashback<br/>
            On Your First Order!
          </h1>
          
          <p className="text-black mb-4 text-sm sm:text-base">
            Type your WhatsApp Number to get an exclusive Code.
          </p>
          
          <div className="mb-4">
            <div className="flex rounded-full border border-gray-300 bg-white overflow-hidden">
              <div className="relative flex items-center px-2 sm:px-3 bg-white border-r border-gray-300">
                <img src="/api/placeholder/24/16" alt="USA flag" className="w-5 h-3 sm:w-6 sm:h-4 mr-1" />
                <span className="text-black text-sm sm:text-base">+1</span>
                <ChevronDown className="ml-1 text-black" size={16} />
              </div>
              <input
                type="tel"
                placeholder="Enter your whatsapp number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-grow px-3 sm:px-4 py-2 sm:py-3 outline-none text-black bg-white text-sm sm:text-base"
              />
            </div>
          </div>
          
          <button 
            className="w-full bg-[#a414d5] text-black py-2 sm:py-3 rounded-full hover:bg-purple-700 transition-colors font-semibold text-sm sm:text-base"
          >
            Get Offer on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClaimOfferPage;