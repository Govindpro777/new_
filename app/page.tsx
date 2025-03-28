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
import business from "@/public/business-concept-smiling-thoughtful-handsome-man-standing-white-isolated-background-touching-his-chin-with-hand-b 1.png"
import bgImage from "@/public/bg-pattern.png"
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import ReviewRatings from "@/components/Review"
import Howworks from "@/components/how_works"
import Experts from "@/components/Experts"

export default function Home() {
  const [projectDescription, setProjectDescription] = useState('');
  const [humanExpertsOnly, setHumanExpertsOnly] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false)


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement expert finding logic
    console.log('Project Description:', projectDescription);
    console.log('Human Experts Only:', humanExpertsOnly);
  };

  return (
    <div className="min-h-screen bg-[#f1efeb]">
      {/* Hero Section */}
      <section
        className="mx-auto px-4 py-4 md:py-12 flex flex-col md:flex-row items-center relative"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
       
        <div className="md:w-1/2 space-y-6 ml-56 ">
          <h1 className="text-4xl md:text-5xl font-bold text-[#16192c] leading-tight">
            A-Plus Homework<br />
            Help For All
          </h1>
          <p className="text-lg text-[#16192c] max-w-md">
            Get personalized expert assistance in any academic field. 100+ courses and programs covered.
          </p>
           <form onSubmit={handleSubmit} className="flex-col sm:flex-row gap-4 pt-4 text-[#16192c]">
          <Input 
            type="text" 
            // placeholder="Describe your project briefly"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            className="w-[460px] h-[150px] pt-4 text-start align-top rounded-xl"
          />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 mt-4">
              <Switch 
                checked={humanExpertsOnly}
                onCheckedChange={setHumanExpertsOnly}
              />
              <span className="text-[#16192c] font-bold font-sans text-lg">Human experts only</span>
            </div>
          </div>
          
          <div className="flex flex-col text-lg font-bold">
            <p className="text-lg text-black mb-2 mt-4">
              Get Offers 
              <span className="text-purple-600"> For FREE & Pay Only </span>
              When You Accept 
              <br />
              An Offer!
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

        <div className="md:w-1/2 mt-6 md:mt-0 relative ">
          <div className="relative h-[650px] w-[500px]">
            <Image src={business} alt="Professional person" fill className="object-cover rounded-lg" />
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-md">
              {/* <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#a414d5]" />
                <span className="text-sm font-medium">Book Now</span>
              </div> */}
            </div>
            {/* <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-[#a414d5]"></div>
                <span className="text-sm font-medium">AI Powered</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <ReviewRatings />

      <Howworks />

      <Experts />

      {/* How It Works Section */}
      {/* <HowItWorks /> */}

      {/* Expert Section */}
      <ExpertSection />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Signup Modal */}
      
    </div>
  )
}
