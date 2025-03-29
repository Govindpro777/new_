import React from 'react';
import { Button } from "@/components/ui/button"
import ProjectForm from "@/components/project-form"
import ExpertSelection from "@/components/expert-selection"
import BibliographyComponent from "@/components/bibliography-component"
import ProjectProgressTracker from "@/components/projectProgress"
import MarketPlace from "@/components/MarketPlace"


export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f1efeb]">
      <ProjectProgressTracker />

      <MarketPlace />
    </div>
  )
}

