// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { X } from "lucide-react"
// import WelcomeModal from "./welcome-modal"

// export default function SignupModal() {
//   const [isOpen, setIsOpen] = useState(true)
//   const [showWelcome, setShowWelcome] = useState(false)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsOpen(false)
//     setShowWelcome(true)
//   }

//   if (!isOpen && !showWelcome) return null

//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
//             <button
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//               onClick={() => setIsOpen(false)}
//             >
//               <X className="h-5 w-5" />
//             </button>

//             <div className="text-center mb-6">
//               {/* <div className="w-12 h-12 bg-[#a414d5] rounded-full mx-auto flex items-center justify-center mb-4">
//                 <span className="text-white font-bold text-xl">A</span>
//               </div> */}
//               <h3 className="text-xl font-semibold">Sign Up XpertBuddy </h3>
//               {/* <p className="text-[#6b7b93] text-sm mt-1">Join XpertBuddy to connect with experts</p> */}
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="name">Full Name</Label>
//                 <Input
//                   id="name"
//                   name="name"
//                   placeholder="Enter your full name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   id="password"
//                   name="password"
//                   type="password"
//                   placeholder="Create a password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <Button type="submit" className="w-full bg-[#a414d5] hover:bg-[#8a0fb3]">
//                 Sign Up
//               </Button>
//             </form>

//             <div className="mt-6 text-center">
//               <p className="text-sm text-[#6b7b93]">
//                 Already have an account? <button className="text-[#a414d5] font-medium">Log In</button>
//               </p>
//             </div>

//             <div className="mt-6 pt-6 border-t border-gray-100 text-center">
//               <p className="text-xs text-[#6b7b93]">
//                 By signing up, you agree to our{" "}
//                 <a href="#" className="underline">
//                   Terms of Service
//                 </a>{" "}
//                 and{" "}
//                 <a href="#" className="underline">
//                   Privacy Policy
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {showWelcome && <WelcomeModal name={formData.name} onClose={() => setShowWelcome(false)} />}
//     </>
//   )
// }

// "use client"

// import type React from "react"
// import { useState } from "react"
// import { X } from "lucide-react"

// export default function SignupModal() {
//   const [email, setEmail] = useState("wadewarren@gmail.com")
//   const [isUserAgreementAccepted, setIsUserAgreementAccepted] = useState(false)
//   const [isMarketingAccepted, setIsMarketingAccepted] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle signup logic
//   }

//   return (
//     <div className="fixed inset-0 bg-shadow-lg flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
//         <button 
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//           aria-label="Close"
//         >
//           <X className="h-5 w-5" />
//         </button>

//         <h2 className="text-xl font-semibold text-center mb-6">Sign Up XpertBuddy</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <label htmlFor="email" className="sr-only">Email</label>
//             <input 
//               id="email"
//               type="email" 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               className="w-full px-3 py-2 border rounded-md"
//               required 
//             />
//           </div>

//           <div className="space-y-2">
//             <div className="flex items-center">
//               <input 
//                 id="user-agreement" 
//                 type="checkbox" 
//                 checked={isUserAgreementAccepted}
//                 onChange={() => setIsUserAgreementAccepted(!isUserAgreementAccepted)}
//                 className="mr-2" 
//               />
//               <label htmlFor="user-agreement" className="text-sm">
//                 I accept User Agreement
//               </label>
//             </div>

//             <div className="flex items-center">
//               <input 
//                 id="marketing-messages" 
//                 type="checkbox" 
//                 checked={isMarketingAccepted}
//                 onChange={() => setIsMarketingAccepted(!isMarketingAccepted)}
//                 className="mr-2" 
//               />
//               <label htmlFor="marketing-messages" className="text-sm">
//                 I don't want to receive marketing messages from XpertBuddy
//               </label>
//             </div>
//           </div>

//           <button 
//             type="submit" 
//             className="w-full bg-[#8a20b9] text-white py-2 rounded-md hover:bg-[#7a10a9] transition-colors"
//             disabled={!isUserAgreementAccepted}
//           >
//             Sign Up
//           </button>
//         </form>

//         <div className="text-center mt-4">
//           <p className="text-sm">
//             Already registered? <a href="#" className="text-[#8a20b9] font-semibold">Log In</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"

import type React from "react"
import { useState } from "react"
import { X } from "lucide-react"

export default function SignupModal() {
  const [email, setEmail] = useState("wadewarren@gmail.com")
  const [isUserAgreementAccepted, setIsUserAgreementAccepted] = useState(false)
  const [isMarketingAccepted, setIsMarketingAccepted] = useState(false)
  const [isOpen, setIsOpen] = useState(true) // State to control modal visibility

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic
  }

  if (!isOpen) return null // Don't render modal if it's closed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
          onClick={() => setIsOpen(false)} // Close modal on click
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-xl font-semibold text-center mb-6">Sign Up XpertBuddy</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="sr-only">Email</label>
            <input 
              id="email"
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md"
              required 
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <input 
                id="user-agreement" 
                type="checkbox" 
                checked={isUserAgreementAccepted}
                onChange={() => setIsUserAgreementAccepted(!isUserAgreementAccepted)}
                className="mr-2" 
              />
              <label htmlFor="user-agreement" className="text-sm">
                I accept User Agreement
              </label>
            </div>

            <div className="flex items-center">
              <input 
                id="marketing-messages" 
                type="checkbox" 
                checked={isMarketingAccepted}
                onChange={() => setIsMarketingAccepted(!isMarketingAccepted)}
                className="mr-2" 
              />
              <label htmlFor="marketing-messages" className="text-sm">
                I don't want to receive marketing messages from XpertBuddy
              </label>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#8a20b9] text-white py-2 rounded-md hover:bg-[#7a10a9] transition-colors"
            disabled={!isUserAgreementAccepted}
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm">
            Already registered? <a href="#" className="text-[#8a20b9] font-semibold">Log In</a>
          </p>
        </div>
      </div>
    </div>
  )
}
