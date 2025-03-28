import React, { useState } from 'react';
import { Calendar, DollarSign, HelpCircle, CreditCard } from 'lucide-react';
import crown from "@/public/Vector.png"
import Image from 'next/image';
import Img1 from "@/public/image.png"
import Img2 from "@/public/image (1).png"
import Img3 from "@/public/image (2).png"


const ExpertLandingPage = () => {
  const [projectName, setProjectName] = useState('');
  const [deadline, setDeadline] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f266cd] to-[#f266cd] flex flex-col mt-12">
      <div className="container mx-auto px-4 py-16 flex-grow flex items-center justify-between">
        {/* Left Content */}
        <div className="w-1/2 text-black ml-12">
          <div className="relative">
            <Image 
              src={crown} 
              alt="Crown" 
              className="absolute -top-10 -left-12 w-20 opacity-70"
            />
            <h1 className="text-5xl font-bold mb-6">Reach Out to the Expert Now</h1>
          </div>
          
          <p className="text-xl mb-10 pr-16">
            Chat with the expert directly, discuss your project in detail, 
            and get professional academic assistance by the deadline.
          </p>
          
          <div className="space-y-4">
            <input 
              type="text"
              placeholder="Personal Self-Care Plan"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg text-gray-800"
            />
            
            <div className="relative">
              <input 
                type="text"
                placeholder="Choose Deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-gray-800"
              />
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
            
            <button className="w-[200px] bg-black text-white py-3 rounded-3xl hover:bg-gray-900 transition">
              Find an Expert
            </button>
          </div>
        </div>
        
        {/* Right Images Placeholder */}
        <div className="w-1/2 flex justify-end space-x-4 mr-12">
          <div className="space-y-4">
          <div className="w-64 h-64 rounded-lg overflow-hidden">
              <Image 
                src={Img1} 
                alt="Expert Image 1" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 h-64 rounded-lg overflow-hidden">
              <Image 
                src={Img2} 
                alt="Expert Image 1" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 mt-16">
          <div className="w-64 h-64 rounded-lg overflow-hidden">
              <Image 
                src={Img3} 
                alt="Expert Image 1" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 flex justify-between">
          <div className="flex items-center space-x-4 text-purple-900">
            <DollarSign className="text-purple-600" />
            <span className="font-semibold">Money-Back Guarantee</span>
          </div>
          <div className="flex items-center space-x-4 text-purple-900">
            <HelpCircle className="text-purple-600" />
            <span className="font-semibold">Support 24/7</span>
          </div>
          <div className="flex items-center space-x-4 text-purple-900">
            <CreditCard className="text-purple-600" />
            <span className="font-semibold">No Hidden Charges</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertLandingPage;