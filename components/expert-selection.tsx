"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Check } from "lucide-react"

const experts = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Academic Writer, Ph.D.",
    rating: 4.9,
    reviews: 127,
    availability: "Today, 2:00 PM",
    selected: false,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Research Specialist, M.Sc.",
    rating: 4.8,
    reviews: 93,
    availability: "Tomorrow, 10:00 AM",
    selected: false,
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Literature Expert, Ph.D.",
    rating: 4.7,
    reviews: 85,
    availability: "Today, 4:30 PM",
    selected: false,
  },
]

export default function ExpertSelection() {
  const [selectedExpert, setSelectedExpert] = useState<number | null>(null)

  const handleSelectExpert = (id: number) => {
    setSelectedExpert(id)
  }

  return (
    <div className="space-y-4">
      {experts.map((expert) => (
        <div
          key={expert.id}
          className={`border rounded-lg p-4 transition-all ${
            selectedExpert === expert.id ? "border-[#a414d5] bg-[#faf3fd]" : "border-gray-200 hover:border-[#a414d5]"
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0">
              <Image src={`/placeholder.svg?height=48&width=48`} alt={expert.name} fill className="object-cover" />
            </div>

            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium">{expert.name}</h3>
                {selectedExpert === expert.id && (
                  <div className="w-5 h-5 bg-[#a414d5] rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
              <p className="text-xs text-[#6b7b93]">{expert.title}</p>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(expert.rating) ? "fill-[#ffb800] text-[#ffb800]" : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
                <span className="text-xs ml-1 text-[#6b7b93]">
                  {expert.rating} ({expert.reviews} reviews)
                </span>
              </div>

              <div className="flex justify-between items-center mt-2">
                <div className="text-xs text-[#6b7b93]">Available: {expert.availability}</div>
                <Button
                  variant={selectedExpert === expert.id ? "default" : "outline"}
                  size="sm"
                  className={
                    selectedExpert === expert.id
                      ? "bg-[#a414d5] hover:bg-[#8a0fb3] text-xs"
                      : "border-[#a414d5] text-[#a414d5] text-xs"
                  }
                  onClick={() => handleSelectExpert(expert.id)}
                >
                  {selectedExpert === expert.id ? "Selected" : "Select"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {selectedExpert && <Button className="w-full bg-[#a414d5] hover:bg-[#8a0fb3]">Confirm Expert Selection</Button>}
    </div>
  )
}

