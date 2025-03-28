"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface WelcomeModalProps {
  name: string
  onClose: () => void
}

export default function WelcomeModal({ name, onClose }: WelcomeModalProps) {
  const firstName = name.split(" ")[0]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-[#faf3fd] rounded-full mx-auto flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-[#a414d5] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">✓</span>
            </div>
          </div>
          <h3 className="text-2xl font-semibold">Welcome, {firstName}!</h3>
          <p className="text-[#6b7b93] mt-2">
            Your XpertBuddy account has been created successfully. You're now ready to connect with experts and submit
            your projects.
          </p>
        </div>

        <div className="space-y-4">
          <Button className="w-full bg-[#a414d5] hover:bg-[#8a0fb3]" onClick={onClose}>
            Explore Experts
          </Button>

          <Button variant="outline" className="w-full border-[#a414d5] text-[#a414d5]" onClick={onClose}>
            Submit a Project
          </Button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#faf3fd] rounded-full flex items-center justify-center">
              <span className="text-[#a414d5]">🎁</span>
            </div>
            <div className="ml-3">
              <h4 className="font-medium text-sm">Get 20% off your first project</h4>
              <p className="text-xs text-[#6b7b93]">Use code WELCOME20 at checkout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

