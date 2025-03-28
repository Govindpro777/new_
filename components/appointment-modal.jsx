"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function AppointmentModal() {
  const [isOpen, setIsOpen] = useState(false)

  // This is a placeholder component that would be used in a real implementation
  // to show the appointment scheduling modal seen in the Figma design

  return (
    <>
      <Button className="bg-[#a414d5] hover:bg-[#8a0fb3]" onClick={() => setIsOpen(true)}>
        Schedule Appointment
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button className="absolute top-4 right-4 text-gray-500" onClick={() => setIsOpen(false)}>
              ✕
            </button>

            <h3 className="text-xl font-semibold mb-4">Schedule Appointment</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Select Date</label>
                <div className="border rounded-lg p-4 flex items-center">
                  <Calendar className="w-5 h-5 text-[#a414d5] mr-2" />
                  <span>March 28, 2025</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Select Time</label>
                <div className="grid grid-cols-3 gap-2">
                  {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"].map((time) => (
                    <button
                      key={time}
                      className="border rounded-lg p-2 text-sm hover:bg-[#faf3fd] hover:border-[#a414d5]"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-[#a414d5] hover:bg-[#8a0fb3]">Confirm Appointment</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

