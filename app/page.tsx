"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import HowItWorks from "@/components/how-it-works"
import ExpertSection from "@/components/expert-section"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import SignupModal from "@/components/signup-modal"
import business from "@/public/business-concept-smiling-thoughtful-handsome-man-standing-white-isolated-background-touching-his-chin-with-hand-b 1.png"
import bg from "@/public/Pattern-Bg-1 2.png"
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import ReviewRatings from "@/components/Review"

export default function Home() {
  const [projectDescription, setProjectDescription] = useState('');
  const [humanExpertsOnly, setHumanExpertsOnly] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false)

  useEffect(() => {
    // Show signup modal after 3 seconds of page load
    const timer = setTimeout(() => {
      setShowSignupModal(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement expert finding logic
    console.log('Project Description:', projectDescription);
    console.log('Human Experts Only:', humanExpertsOnly);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="container mx-auto px-4 py-4 md:py-12 flex flex-col md:flex-row items-center relative"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
       
        <div className="md:w-1/2 space-y-6 ml-14 ">
          <h1 className="text-4xl md:text-5xl font-bold text-[#16192c] leading-tight">
            A-Plus Homework<br />
            Help For All
          </h1>
          <p className="text-lg text-[#6b7b93] max-w-md">
            Get personalized expert assistance in any academic field. 100+ courses and programs covered.
          </p>
           <form onSubmit={handleSubmit} className="flex-col sm:flex-row gap-4 pt-4">
          <Input 
            type="text" 
            placeholder="Describe your project briefly"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            className="w-[460px] h-[150px]"
          />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 mt-4">
              <Switch 
                checked={humanExpertsOnly}
                onCheckedChange={setHumanExpertsOnly}
              />
              <span className="text-gray-700">Human experts only</span>
            </div>
          </div>
          
          <div className="flex flex-col">
            <p className="text-sm text-black mb-2 mt-4">
              Get Offers For FREE & Pay Only When You Accept An Offer!
            </p>
            
            <Button 
              type="submit" 
              className="w-[150px] rounded-2xl bg-purple-600 hover:bg-purple-700 text-black mt-4"
            >
              Find an Expert
            </Button>
          </div>
        </form>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <div className="relative h-[650px] w-[500px]">
            <Image src={business} alt="Professional person" fill className="object-cover rounded-lg" />
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-md">
              {/* <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#a414d5]" />
                <span className="text-sm font-medium">Book Now</span>
              </div> */}
            </div>
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-md">
              {/* <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-[#a414d5]"></div>
                <span className="text-sm font-medium">AI Powered</span>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <ReviewRatings />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Expert Section */}
      <ExpertSection />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Signup Modal */}
      {showSignupModal && <SignupModal />}
    </div>
  )
}
