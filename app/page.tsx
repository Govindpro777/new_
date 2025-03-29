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
import Offer from "@/components/Offer"
import FeatureCard from "@/components/FeatureCard"
import ReviewCard from "@/components/ReviewCard"
import Home1 from "@/components/Home"
export default function Home() {
  const [projectDescription, setProjectDescription] = useState('');
  const [humanExpertsOnly, setHumanExpertsOnly] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement expert finding logic
    console.log('Project Description:', projectDescription);
    console.log('Human Experts Only:', humanExpertsOnly);
  };

  return (
    <div className="min-h-screen bg-[#f1efeb] ">
  
      <Home1 />

      <ReviewRatings />

      <Howworks />

      <Experts />

      <FeatureCard />

      <ReviewCard />

      <Offer />

  
      <FAQ />

   
      
    </div>
  )
}
