// import React, { useState } from 'react';
// import { Heart, ChevronRight, Calendar, UserPlus, ChevronDown, Search, Sliders } from 'lucide-react';
// import Image from 'next/image';
// import img1 from "@/public/image 344.png"
// import img2 from "@/public/Group 316127895 (2).png"
// import img3 from "@/public/Group 316127895 (3).png"

// interface Tutor {
//   name: string;
//   verified: boolean;
//   flag: string;
//   experience: string;
//   reviewCount: string;
//   subjects: string;
//   completed: string;
// }

// interface TutorCardProps {
//   tutor: Tutor;
//   price: string;
//   paymentInfo?: string;
//   responseTime?: string;
//   imageIndex: number;
// }

// const TutorCard: React.FC<TutorCardProps> = ({ tutor, price, paymentInfo, responseTime, imageIndex }) => {
//   const getImage = (index: number) => {
//     switch (index % 3) {
//       case 0:
//         return img1;
//       case 1:
//         return img2;
//       case 2:
//         return img3;
//       default:
//         return img1;
//     }
//   };

//   return (
//     <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
//       <div className="flex items-start gap-3">
//         <div className="relative">
//           <div className="w-12 h-12 rounded-full bg-gray-200"></div>
//           <div className="absolute -top-1 -left-1 w-4 h-4 flex items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold">✓</div>
//           <Image 
//             src={getImage(imageIndex)} 
//             alt={tutor.name} 
//             className="w-12 h-12 rounded-full object-cover absolute top-0 left-0"
//             width={48}
//             height={48}
//           />
//         </div>
//         <div>
//           <div className="flex items-center gap-1">
//             <p className="font-semibold text-sm">{tutor.name}</p>
//             {tutor.verified && <span className="text-blue-500 text-xs">✓</span>}
//             <img src="/api/placeholder/16/12" alt="flag" className="h-3 w-4 ml-1" />
//           </div>
//           <div className="text-xs text-purple-700 font-bold mt-0.5">SUPER TUTOR</div>
//           <div className="text-xs text-gray-500 mt-0.5">{tutor.experience}</div>
//           <div className="flex items-center gap-1 mt-0.5">
//             <div className="flex">
//               {'★★★★★'.split('').map((star, i) => (
//                 <span key={i} className="text-yellow-400 text-xs">★</span>
//               ))}
//             </div>
//             <span className="text-xs text-gray-600">({tutor.reviewCount} Reviews)</span>
//           </div>
//           <div className="text-xs text-gray-600 mt-1 max-w-xs leading-tight">{tutor.subjects}</div>
//           <div className="text-xs text-gray-500 mt-1">Completed: {tutor.completed}</div>
//         </div>
//       </div>
//       <div className="flex flex-col items-end gap-1 min-w-fit ml-2">
//         <button className="border-none bg-transparent p-0 mb-1">
//           <Heart size={20} className="text-gray-300" />
//         </button>
//         {responseTime && (
//           <div className="text-xs text-gray-500 mb-0.5">Answer within {responseTime}</div>
//         )}
//         <div className="font-semibold text-right">Price: {price}</div>
//         {paymentInfo && (
//           <div className="text-xs text-gray-500 mb-1">{paymentInfo}</div>
//         )}
//         <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2 text-sm font-medium w-full mb-2">
//           {price === "Price Not Set" ? "Request a Price" : "Hire This Expert"}
//         </button>
//         <button className="text-purple-600 border border-purple-600 bg-white hover:bg-purple-50 rounded-full px-6 py-1.5 text-sm w-full">
//           Chat
//         </button>
//       </div>
//     </div>
//   );
// };

// const ProjectDetails = () => {
//   return (
//     <div className="bg-white p-4 h-full mb-14">
//       <div className="flex items-center mb-4">
//         <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white mr-2">B</div>
//         <p className="font-medium">Attach a File</p>
//       </div>
      
//       <h2 className="text-xl font-bold mb-4">Project Details</h2>
      
//       <div className="mb-4">
//         <label className="block text-sm mb-1">Subject Area</label>
//         <div className="border rounded-md p-2.5 flex justify-between items-center">
//           <span className="text-gray-400 text-sm">Enter subject area</span>
//           <ChevronDown size={16} className="text-gray-400" />
//         </div>
//       </div>
      
//       <div className="mb-4">
//         <label className="block text-sm mb-1">Project Type</label>
//         <div className="border rounded-md p-2.5 flex justify-between items-center">
//           <span className="text-gray-400 text-sm">Enter project type</span>
//           <ChevronDown size={16} className="text-gray-400" />
//         </div>
//       </div>
      
//       <div className="bg-purple-50 border border-purple-200 rounded-md p-3 mb-4">
//         <div className="flex items-center text-purple-600 font-medium mb-2">
//           <div className="mr-2">⚡</div>
//           <span>Express Project</span>
//           <div className="ml-auto">ⓘ</div>
//         </div>
        
//         <div>
//           <label className="block text-sm mb-1">Deadline</label>
//           <div className="bg-white border rounded-md p-2.5 flex justify-between items-center">
//             <span className="text-gray-600 text-sm">01.28.2025 10 pm</span>
//             <Calendar size={16} className="text-purple-500" />
//           </div>
//         </div>
//       </div>
      
//       <div className="mb-4">
//         <label className="block text-sm mb-1">Number of words</label>
//         <input 
//           type="text" 
//           className="border rounded-md p-2.5 w-full" 
//           value="1100 words" 
//           readOnly 
//         />
//       </div>
      
//       <div className="text-purple-600 text-right mb-6">More</div>
      
//       <button className="bg-gray-900 text-white rounded-full py-3 w-full mb-8">
//         Edit Details
//       </button>
      
//       <div className="text-center mb-4">
//         <div className="flex justify-center mb-2">
//           <div className="text-purple-600 text-3xl">
//             <UserPlus size={32} className="mx-auto text-purple-600" />
//           </div>
//         </div>
//         <h3 className="text-lg font-bold">Need <span className="text-purple-600">More Tutor</span></h3>
//         <h3 className="text-lg font-bold mb-1">Options?</h3>
//         <p className="text-sm text-gray-600 mb-4">Invite top tutors to help with your assignment</p>
        
//         <button className="bg-pink-400 text-white rounded-full py-2.5 px-6 flex items-center justify-center mx-auto">
//           Invite Tutors
//           <ChevronRight size={18} className="ml-1" />
//         </button>
//       </div>
      
//       <div className="bg-pink-400 rounded-xl p-4 text-center text-white mb-6">
//         <h3 className="font-bold text-lg mb-1">Track Your Order Through The App!</h3>
//         <p className="mb-4">Get $20 bonus on your first project via app</p>
        
//         <div className="bg-white p-4 rounded-lg mb-3">
//           <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
//             <div>9:41</div>
//             <div className="flex items-center">
//               <span className="mr-1">•••</span>
//               <span>5G</span>
//             </div>
//           </div>
          
//           <div className="text-purple-600 font-bold text-xl mb-3 flex items-center justify-center">
//             <span className="mr-2">⚡</span>
//             BUDDY
//           </div>
          
//           <div className="flex justify-center mb-4">
//             <img src="/api/placeholder/150/150" alt="QR Code" className="w-32 h-32" />
//           </div>
          
//           <button className="border border-gray-300 rounded-full py-2 px-4 mx-auto block text-gray-700">
//             Download App
//           </button>
//         </div>
//       </div>
      
//       <div className="bg-purple-600 rounded-t-xl text-white p-3 flex justify-between items-center">
//         <div className="font-semibold">Chats</div>
//         <ChevronDown size={18} />
//       </div>
      
//       <div className="border-x border-b rounded-b-xl">
//         <div className="flex items-center p-3 border-b">
//           <Search size={16} className="text-gray-400 mr-2" />
//           <input 
//             type="text" 
//             placeholder="Search by Name" 
//             className="flex-1 outline-none text-sm" 
//           />
//           <button className="flex items-center text-gray-600 text-sm">
//             <Sliders size={14} className="mr-1" />
//             Filter
//           </button>
//         </div>
        
//         <div className="max-h-64 overflow-y-auto">
//           {[
//             { name: "Aspen Stanton", verified: true, rating: 4.5, message: "Hello...", price: "Price Not Set", bestOffer: true },
//             { name: "Parvipan Deep S.", rating: 4.5, message: "Hello...", price: "$219" },
//             { name: "Emerson Rhiel Madsen", rating: 4.5, message: "Hello...", price: "$219" },
//             { name: "Jakob Torff", verified: true, rating: 4.5, message: "Hello...", price: "$219" },
//             { name: "Cooper George", rating: 4.5, message: "Hello...", price: "$219" }
//           ].map((chat, index) => (
//             <div key={index} className="flex items-center justify-between p-3 border-b">
//               <div className="flex items-center">
//                 <img src="/api/placeholder/32/32" alt={chat.name} className="w-8 h-8 rounded-full mr-2" />
//                 <div>
//                   <div className="flex items-center">
//                     <span className="font-medium text-sm">{chat.name}</span>
//                     {chat.verified && <span className="text-blue-500 text-xs ml-1">✓</span>}
//                     {chat.bestOffer && <span className="text-green-500 text-xs ml-2 font-bold">Best Offer</span>}
//                   </div>
//                   <div className="flex items-center">
//                     <span className="text-yellow-400 text-xs">★</span>
//                     <span className="text-xs text-gray-600 mr-2">{chat.rating}</span>
//                     <span className="text-xs text-gray-500">{chat.message}</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="text-sm font-semibold">{chat.price}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const TutoringMarketplace = () => {
//   const tutors = [
//     {
//       name: "Parvipan Deep S.",
//       verified: true,
//       flag: "US",
//       experience: "10 Year of exp. overall",
//       reviewCount: "208",
//       subjects: "UCLA Certified English Pro With 10+ Years Exp 🎓💯 ADHD Specialist / Creator of Spreaker Bachelor Exams",
//       price: "$90",
//       paymentInfo: "Pay now only $45",
//       responseTime: "",
//       completed: "21 Community projects out of 1240"
//     },
//     {
//       name: "Aspen Stanton",
//       verified: true,
//       flag: "US",
//       experience: "10 Year of exp. overall",
//       reviewCount: "208", 
//       subjects: "Bachelor Science",
//       price: "Price Not Set",
//       paymentInfo: "",
//       responseTime: "",
//       completed: "21 Community projects out of 1240"
//     },
//     {
//       name: "Jakob Torff",
//       verified: true,
//       flag: "US",
//       experience: "10 Year of exp. overall",
//       reviewCount: "208",
//       subjects: "UCLA Certified English Pro With 10+ Years Exp 🎓💯 ADHD Specialist",
//       price: "$90",
//       paymentInfo: "Pay now only $45",
//       responseTime: "",
//       completed: "21 Community projects out of 1240"
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto bg-[#f1efeb] flex flex-col lg:flex-row">
//       {/* Main tutoring marketplace - takes 2/3 on desktop */}
//       <div className="w-full lg:w-2/3 lg:border-r">
//         <div className="pt-1 bg-orange-400 mb-0.5 relative">
//           <div className="absolute -top-1 left-4 text-white text-xs px-2 py-0.5 bg-orange-500 rounded-b-sm">
//             Best Offers
//           </div>
//         </div>
        
//         {tutors.map((tutor, index) => (
//           <TutorCard 
//             key={index} 
//             tutor={tutor} 
//             price={tutor.price} 
//             paymentInfo={tutor.paymentInfo} 
//             responseTime={tutor.responseTime}
//             imageIndex={index}
//           />
//         ))}
        
//         <div className="p-5 text-center bg-white border-b border-gray-200">
//           <h3 className="font-semibold text-lg mb-1">Can't Pick the Right Expert?</h3>
//           <p className="text-sm text-gray-600 mb-3">Our support team is here to help you make this decision 👍</p>
//           <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2 text-sm font-medium mb-6">
//             Contact Support
//           </button>
          
//           <div className="flex justify-center">
//             <img src="/api/placeholder/150/150" alt="Support illustration" className="h-28 w-auto" />
//           </div>
//         </div>
        
//         <div className="bg-purple-600 text-white p-4 rounded-lg mx-4 my-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <h3 className="font-semibold text-lg">Get More Offers With a Project Promotion!</h3>
//               <p className="text-sm text-purple-100 mt-1">Use a Project Promotion to bring in twice the offers.</p>
//             </div>
//             <div className="bg-purple-700 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">2x</div>
//           </div>
//           <button className="bg-purple-900 hover:bg-purple-800 text-white rounded-full px-4 py-2 text-sm font-medium mt-3 w-full">
//             Get More Offers
//           </button>
//         </div>

//         {tutors.map((tutor, index) => (
//           <TutorCard 
//             key={index} 
//             tutor={tutor} 
//             price={tutor.price} 
//             paymentInfo={tutor.paymentInfo} 
//             responseTime={tutor.responseTime}
//             imageIndex={index}
//           />
//         ))}


       
        
//         <div className="flex items-center justify-center gap-1 py-4 text-sm text-gray-600 bg-white">
//           <span className="px-2">« First</span>
//           <span className="px-2">« Back</span>
//           <span className="px-2">1</span>
//           <span className="bg-purple-600 text-white rounded-full px-3 py-1">2</span>
//           <span className="px-2">3</span>
//           <span className="px-2">4</span>
//           <span className="px-2">...</span>
//           <span className="px-2">25</span>
//           <span className="px-2">Next »</span>
//           <span className="px-2">Last »</span>
//         </div>
//       </div>
       

      
//       {/* Right sidebar for project details - takes 1/3 on desktop */}
//       <div className="w-full lg:w-1/3 ml-4 self-start">
//         <ProjectDetails />
//       </div>
      
//     </div>
//   );
// };

// export default TutoringMarketplace;


import React, { useState } from 'react';
import { Heart, ChevronRight, Calendar, UserPlus, ChevronDown, Search, Sliders } from 'lucide-react';
import Image from 'next/image';
import img1 from "@/public/image 344.png"
import img2 from "@/public/Group 316127895 (2).png"
import img3 from "@/public/Group 316127895 (3).png"

interface Tutor {
  name: string;
  verified: boolean;
  flag: string;
  experience: string;
  reviewCount: string;
  subjects: string;
  completed: string;
}

interface TutorCardProps {
  tutor: Tutor;
  price: string;
  paymentInfo?: string;
  responseTime?: string;
  imageIndex: number;
}

const TutorCard: React.FC<TutorCardProps> = ({ tutor, price, paymentInfo, responseTime, imageIndex }) => {
  const getImage = (index: number) => {
    switch (index % 3) {
      case 0:
        return img1;
      case 1:
        return img2;
      case 2:
        return img3;
      default:
        return img1;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b border-gray-200 bg-white">
      <div className="flex items-start gap-3 w-full sm:w-auto mb-4 sm:mb-0">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-gray-200"></div>
          <div className="absolute -top-1 -left-1 w-4 h-4 flex items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold">✓</div>
          <Image 
            src={getImage(imageIndex)} 
            alt={tutor.name} 
            className="w-12 h-12 rounded-full object-cover absolute top-0 left-0"
            width={48}
            height={48}
          />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <p className="font-semibold text-sm">{tutor.name}</p>
            {tutor.verified && <span className="text-blue-500 text-xs">✓</span>}
            <img src="/api/placeholder/16/12" alt="flag" className="h-3 w-4 ml-1" />
          </div>
          <div className="text-xs text-purple-700 font-bold mt-0.5">SUPER TUTOR</div>
          <div className="text-xs text-gray-500 mt-0.5">{tutor.experience}</div>
          <div className="flex items-center gap-1 mt-0.5">
            <div className="flex">
              {'★★★★★'.split('').map((star, i) => (
                <span key={i} className="text-yellow-400 text-xs">★</span>
              ))}
            </div>
            <span className="text-xs text-gray-600">({tutor.reviewCount} Reviews)</span>
          </div>
          <div className="text-xs text-gray-600 mt-1 max-w-xs leading-tight">{tutor.subjects}</div>
          <div className="text-xs text-gray-500 mt-1">Completed: {tutor.completed}</div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1 min-w-fit sm:ml-2 w-full sm:w-auto">
        <button className="border-none bg-transparent p-0 mb-1 self-end">
          <Heart size={20} className="text-gray-300" />
        </button>
        {responseTime && (
          <div className="text-xs text-gray-500 mb-0.5">{responseTime}</div>
        )}
        <div className="font-semibold text-right self-end">Price: {price}</div>
        {paymentInfo && (
          <div className="text-xs text-gray-500 mb-1 self-end">{paymentInfo}</div>
        )}
        <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2 text-sm font-medium w-full mb-2">
          {price === "Price Not Set" ? "Request a Price" : "Hire This Expert"}
        </button>
        <button className="text-purple-600 border border-purple-600 bg-white hover:bg-purple-50 rounded-full px-6 py-1.5 text-sm w-full">
          Chat
        </button>
      </div>
    </div>
  );
};

const ProjectDetails = () => {
  return (
    <div className="bg-white p-4 h-full mb-6 sm:mb-14 mt-4 sm:mt-0">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white mr-2">B</div>
        <p className="font-medium text-sm sm:text-base">Attach a File</p>
      </div>
      
      <h2 className="text-xl font-bold mb-4">Project Details</h2>
      
      <div className="mb-4">
        <label className="block text-sm mb-1">Subject Area</label>
        <div className="border rounded-md p-2.5 flex justify-between items-center">
          <span className="text-gray-400 text-sm">Enter subject area</span>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm mb-1">Project Type</label>
        <div className="border rounded-md p-2.5 flex justify-between items-center">
          <span className="text-gray-400 text-sm">Enter project type</span>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
      
      <div className="bg-purple-50 border border-purple-200 rounded-md p-3 mb-4">
        <div className="flex items-center text-purple-600 font-medium mb-2">
          <div className="mr-2">⚡</div>
          <span>Express Project</span>
          <div className="ml-auto">ⓘ</div>
        </div>
        
        <div>
          <label className="block text-sm mb-1">Deadline</label>
          <div className="bg-white border rounded-md p-2.5 flex justify-between items-center">
            <span className="text-gray-600 text-sm">01.28.2025 10 pm</span>
            <Calendar size={16} className="text-purple-500" />
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm mb-1">Number of words</label>
        <input 
          type="text" 
          className="border rounded-md p-2.5 w-full" 
          value="1100 words" 
          readOnly 
        />
      </div>
      
      <div className="text-purple-600 text-right mb-6">More</div>
      
      <button className="bg-gray-900 text-white rounded-full py-3 w-full mb-8">
        Edit Details
      </button>
      
      <div className="text-center mb-4">
        <div className="flex justify-center mb-2">
          <div className="text-purple-600 text-3xl">
            <UserPlus size={32} className="mx-auto text-purple-600" />
          </div>
        </div>
        <h3 className="text-lg font-bold">Need <span className="text-purple-600">More Tutor</span></h3>
        <h3 className="text-lg font-bold mb-1">Options?</h3>
        <p className="text-sm text-gray-600 mb-4">Invite top tutors to help with your assignment</p>
        
        <button className="bg-pink-400 text-white rounded-full py-2.5 px-6 flex items-center justify-center mx-auto">
          Invite Tutors
          <ChevronRight size={18} className="ml-1" />
        </button>
      </div>
      
      <div className="bg-pink-400 rounded-xl p-4 text-center text-white mb-6">
        <h3 className="font-bold text-lg mb-1">Track Your Order Through The App!</h3>
        <p className="mb-4">Get $20 bonus on your first project via app</p>
        
        <div className="bg-white p-4 rounded-lg mb-3">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <div>9:41</div>
            <div className="flex items-center">
              <span className="mr-1">•••</span>
              <span>5G</span>
            </div>
          </div>
          
          <div className="text-purple-600 font-bold text-xl mb-3 flex items-center justify-center">
            <span className="mr-2">⚡</span>
            BUDDY
          </div>
          
          <div className="flex justify-center mb-4">
            <img src="/api/placeholder/150/150" alt="QR Code" className="w-32 h-32" />
          </div>
          
          <button className="border border-gray-300 rounded-full py-2 px-4 mx-auto block text-gray-700">
            Download App
          </button>
        </div>
      </div>
      
      <div className="bg-purple-600 rounded-t-xl text-white p-3 flex justify-between items-center">
        <div className="font-semibold">Chats</div>
        <ChevronDown size={18} />
      </div>
      
      <div className="border-x border-b rounded-b-xl">
        <div className="flex items-center p-3 border-b">
          <Search size={16} className="text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search by Name" 
            className="flex-1 outline-none text-sm" 
          />
          <button className="flex items-center text-gray-600 text-sm">
            <Sliders size={14} className="mr-1" />
            Filter
          </button>
        </div>
        
        <div className="max-h-64 overflow-y-auto">
          {[
            { name: "Aspen Stanton", verified: true, rating: 4.5, message: "Hello...", price: "Price Not Set", bestOffer: true },
            { name: "Parvipan Deep S.", rating: 4.5, message: "Hello...", price: "$219" },
            { name: "Emerson Rhiel Madsen", rating: 4.5, message: "Hello...", price: "$219" },
            { name: "Jakob Torff", verified: true, rating: 4.5, message: "Hello...", price: "$219" },
            { name: "Cooper George", rating: 4.5, message: "Hello...", price: "$219" }
          ].map((chat, index) => (
            <div key={index} className="flex items-center justify-between p-3 border-b">
              <div className="flex items-center">
                <img src="/api/placeholder/32/32" alt={chat.name} className="w-8 h-8 rounded-full mr-2" />
                <div>
                  <div className="flex items-center">
                    <span className="font-medium text-sm">{chat.name}</span>
                    {chat.verified && <span className="text-blue-500 text-xs ml-1">✓</span>}
                    {chat.bestOffer && <span className="text-green-500 text-xs ml-2 font-bold">Best Offer</span>}
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-xs">★</span>
                    <span className="text-xs text-gray-600 mr-2">{chat.rating}</span>
                    <span className="text-xs text-gray-500">{chat.message}</span>
                  </div>
                </div>
              </div>
              <div className="text-sm font-semibold">{chat.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TutoringMarketplace = () => {
  const tutors = [
    {
      name: "Parvipan Deep S.",
      verified: true,
      flag: "US",
      experience: "10 Year of exp. overall",
      reviewCount: "208",
      subjects: "UCLA Certified English Pro With 10+ Years Exp 🎓💯 ADHD Specialist / Creator of Spreaker Bachelor Exams",
      price: "$90",
      paymentInfo: "Pay now only $45",
      responseTime: "",
      completed: "21 Community projects out of 1240"
    },
    {
      name: "Aspen Stanton",
      verified: true,
      flag: "US",
      experience: "10 Year of exp. overall",
      reviewCount: "208", 
      subjects: "Bachelor Science",
      price: "Price Not Set",
      paymentInfo: "",
      responseTime: "",
      completed: "21 Community projects out of 1240"
    },
    {
      name: "Jakob Torff",
      verified: true,
      flag: "US",
      experience: "10 Year of exp. overall",
      reviewCount: "208",
      subjects: "UCLA Certified English Pro With 10+ Years Exp 🎓💯 ADHD Specialist",
      price: "$90",
      paymentInfo: "Pay now only $45",
      responseTime: "",
      completed: "21 Community projects out of 1240"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto bg-[#f1efeb] flex flex-col lg:flex-row">
      {/* Main tutoring marketplace - takes 2/3 on desktop */}
      <div className="w-full lg:w-2/3 lg:border-r">
        <div className="pt-1 bg-orange-400 mb-0.5 relative">
          <div className="absolute -top-1 left-4 text-white text-xs px-2 py-0.5 bg-orange-500 rounded-b-sm">
            Best Offers
          </div>
        </div>
        
        {tutors.map((tutor, index) => (
          <TutorCard 
            key={index} 
            tutor={tutor} 
            price={tutor.price} 
            paymentInfo={tutor.paymentInfo} 
            responseTime={tutor.responseTime}
            imageIndex={index}
          />
        ))}
        
        <div className="p-5 text-center bg-white border-b border-gray-200">
          <h3 className="font-semibold text-lg mb-1">Can't Pick the Right Expert?</h3>
          <p className="text-sm text-gray-600 mb-3">Our support team is here to help you make this decision 👍</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2 text-sm font-medium mb-6">
            Contact Support
          </button>
          
          <div className="flex justify-center">
            <img src="/api/placeholder/150/150" alt="Support illustration" className="h-28 w-auto" />
          </div>
        </div>
        
        <div className="bg-purple-600 text-white p-4 rounded-lg mx-4 my-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-4 sm:gap-0">
            <div>
              <h3 className="font-semibold text-lg text-center sm:text-left">Get More Offers With a Project Promotion!</h3>
              <p className="text-sm text-purple-100 mt-1 text-center sm:text-left">Use a Project Promotion to bring in twice the offers.</p>
            </div>
            <div className="bg-purple-700 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2x</div>
          </div>
          <button className="bg-purple-900 hover:bg-purple-800 text-white rounded-full px-4 py-2 text-sm font-medium mt-3 w-full">
            Get More Offers
          </button>
        </div>

        {tutors.map((tutor, index) => (
          <TutorCard 
            key={index} 
            tutor={tutor} 
            price={tutor.price} 
            paymentInfo={tutor.paymentInfo} 
            responseTime={tutor.responseTime}
            imageIndex={index}
          />
        ))}
        
        <div className="flex flex-wrap items-center justify-center gap-1 py-4 text-sm text-gray-600 bg-white">
          <span className="px-2 my-1">« First</span>
          <span className="px-2 my-1">« Back</span>
          <span className="px-2 my-1">1</span>
          <span className="bg-purple-600 text-white rounded-full px-3 py-1 my-1">2</span>
          <span className="px-2 my-1">3</span>
          <span className="px-2 my-1">4</span>
          <span className="px-2 my-1">...</span>
          <span className="px-2 my-1">25</span>
          <span className="px-2 my-1">Next »</span>
          <span className="px-2 my-1">Last »</span>
        </div>
      </div>
      
      {/* Right sidebar for project details - takes 1/3 on desktop */}
      <div className="w-full lg:w-1/3 lg:ml-4 px-4 lg:px-0 self-start">
        <ProjectDetails />
      </div>
    </div>
  );
};

export default TutoringMarketplace;