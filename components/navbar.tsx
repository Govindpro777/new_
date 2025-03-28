// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { usePathname } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Menu, X } from "lucide-react"
// import SignupModal from "./signup-modal"
// import logo from "@/public/Group 316127881.png"

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [showSignup, setShowSignup] = useState(false)
//   const pathname = usePathname()

//   const isActive = (path: string) => {
//     return pathname === path
//   }

//   return (
//     <>
//       <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-100">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <Link href="/" className="flex items-center gap-2">
//             <Image 
//                 src={logo} 
//                 alt="XpertBuddy Logo" 
//                 width={100} 
//                 height={40} 
//                 className="w-26 h-10"
//               />
//             </Link>
//           </div>

//           <nav className="hidden md:flex items-center gap-6">
//             <Link
//               href="/"
//               className={`text-sm ${isActive("/") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}
//             >
//               Home
//             </Link>
//             <Link
//               href="/projects"
//               className={`text-sm ${isActive("/projects") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}
//             >
//               Projects
//             </Link>
//             <Link
//               href="/experts"
//               className={`text-sm ${isActive("/experts") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}
//             >
//               Experts
//             </Link>
//             <Link
//               href="/pricing"
//               className={`text-sm ${isActive("/pricing") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}
//             >
//               Pricing
//             </Link>
//             <Link
//               href="/contact"
//               className={`text-sm ${isActive("/contact") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}
//             >
//               Contact
//             </Link>
//           </nav>

//           <div className="flex items-center gap-3">
//             <Button variant="outline" className="text-sm hidden md:flex" onClick={() => setShowSignup(true)}>
//               Log in
//             </Button>
//             <Button className="bg-[#a414d5] hover:bg-[#8a0fb3] text-white text-sm" onClick={() => setShowSignup(true)}>
//               Sign Up
//             </Button>
//             <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t border-gray-100">
//             <div className="container mx-auto px-4 py-4">
//               <nav className="flex flex-col gap-4">
//                 <Link
//                   href="/"
//                   className={`text-sm ${isActive("/") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   href="/projects"
//                   className={`text-sm ${isActive("/projects") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Projects
//                 </Link>
//                 <Link
//                   href="/experts"
//                   className={`text-sm ${isActive("/experts") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Experts
//                 </Link>
//                 <Link
//                   href="/pricing"
//                   className={`text-sm ${isActive("/pricing") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Pricing
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className={`text-sm ${isActive("/contact") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Contact
//                 </Link>
//               </nav>
//             </div>
//           </div>
//         )}
//       </header>

//       {showSignup && <SignupModal />}
//     </>
//   )
// }


// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import SignupModal from "./signup-modal";
// import logo from "@/public/Group 316127881.png";




// export default function Navbar() {

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const pathname = usePathname();

//   const isActive = (path: string) => pathname === path;

//   return (
//     <>
//       <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-100">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <Link href="/" className="flex items-center gap-2">
//             <Image src={logo} alt="XpertBuddy Logo" width={100} height={40} className="w-26 h-10" />
//           </Link>

//           <nav className="hidden md:flex items-center gap-6">
//             {["/", "/projects", "/experts", "/pricing", "/contact"].map((path) => (
//               <Link
//                 key={path}
//                 href={path}
//                 className={`text-sm ${isActive(path) ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}
//               >
//                 {path.replace("/", "") || "Home"}
//               </Link>
//             ))}
//           </nav>

//           <div className="flex items-center gap-3">
//             <Button variant="outline" className="text-sm hidden md:flex" onClick={() => setShowSignup(true)}>
//               Log in
//             </Button>
//             <Button className="bg-[#a414d5] hover:bg-[#8a0fb3] text-white text-sm" onClick={() => setShowSignup(true)}>
//               Sign Up
//             </Button>
//             <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t border-gray-100">
//             <div className="container mx-auto px-4 py-4">
//               <nav className="flex flex-col gap-4">
//                 {["/", "/projects", "/experts", "/pricing", "/contact"].map((path) => (
//                   <Link
//                     key={path}
//                     href={path}
//                     className={`text-sm ${isActive(path) ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {path.replace("/", "") || "Home"}
//                   </Link>
//                 ))}
//               </nav>
//             </div>
//           </div>
//         )}
//       </header>

//       {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
//     </>
//   );
// }

// "use client"

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import SignupModal from "./signup-modal";
// import logo from "@/public/Group 316127881.png";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const pathname = usePathname();

//   const handleSignupClick = () => {
//     setShowSignup(true);
//     setIsMenuOpen(false);
//   };

//   const isActive = (path: string) => pathname === path;

//   return (
//     <>
//       <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-100">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <Link href="/">
//             <Image
//               src={logo}
//               alt="XpertBuddy Logo"
//               width={100}
//               height={40}
//               className="w-26 h-10"
//             />
//           </Link>

//           <nav className="hidden md:flex items-center gap-6">
//             <Link href="/" className={`text-sm ${isActive("/") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>Find Tutor</Link>
//             <Link href="/projects" className={`text-sm ${isActive("/projects") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>HomeWork</Link>
//             <Link href="/experts" className={`text-sm ${isActive("/experts") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>0 USD</Link>
//             <Link href="/pricing" className={`text-sm ${isActive("/pricing") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>Refer a friend</Link>
//             <Link href="/contact" className={`text-sm ${isActive("/contact") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>Contact</Link>
//           </nav>

//           <div className="flex items-center gap-3">
//             <Button variant="outline" className="text-sm hidden md:flex" onClick={handleSignupClick}>Log in</Button>
//             <Button className="bg-[#a414d5] hover:bg-[#8a0fb3] text-white text-sm" onClick={handleSignupClick}>Sign Up</Button>
//             <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t border-gray-100">
//             <div className="container mx-auto px-4 py-4">
//               <nav className="flex flex-col gap-4">
//                 <Link href="/" className={`text-sm ${isActive("/") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
//                 <Link href="/projects" className={`text-sm ${isActive("/projects") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>Projects</Link>
//                 <Link href="/experts" className={`text-sm ${isActive("/experts") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>Experts</Link>
//                 <Link href="/pricing" className={`text-sm ${isActive("/pricing") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>Pricing</Link>
//                 <Link href="/contact" className={`text-sm ${isActive("/contact") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
//               </nav>
//             </div>
//           </div>
//         )}
//       </header>

//       {showSignup && <SignupModal />}
//     </>
//   );
// }


// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import SignupModal from "./signup-modal";
// import logo from "@/public/Group 316127881.png";
// import USD from "@/public/Frame 1171284552.png";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const pathname = usePathname();

//   const handleSignupClick = () => {
//     setShowSignup(true);
//     setIsMenuOpen(false);
//   };
//   const [activeLanguage, setActiveLanguage] = useState("English, USD");
//   const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

//   const languageOptions = [
//     "English, USD", 
//     "Spanish, EUR", 
//     "French, EUR"
//   ];

//   const isActive = (path: string) => pathname === path;

//   return (
//     <>
//       <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-100">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <Link href="/">
//             <Image src={logo} alt="XpertBuddy Logo" width={100} height={40} className="w-26 h-10" />
//           </Link>

//           <nav className="hidden md:flex items-center gap-6">
//             <Link href="/" className={`text-md ${isActive("/") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>Find Tutor</Link>
//             <Link href="/projects" className={`text-md ${isActive("/projects") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>HomeWork</Link>
//             <Link href="/experts" className={`text-sm ${isActive("/experts") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>
//               <Image src={USD} alt="XpertBuddy Logo" width={100} height={40} className="w-17 h-8" />
//             </Link>
//             <Link
//               href="/pricing"
//               className={`text-md px-3 py-1 border border-[#a414d5] rounded-lg transition ${isActive("/pricing")
//                   ? "text-[#a414d5] font-medium bg-[#f9f0ff]" // Optional light background for active state
//                   : "text-[#16192c] hover:text-[#a414d5] hover:bg-[#f9f0ff]"
//                 }`}
//             >
//               Refer a friend
//             </Link>
//             <div className="flex items-center space-x-4">
//       {/* Language Dropdown */}
//       <div className="relative">
//         <button 
//           onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
//           className="flex items-center text-sm text-gray-700 hover:text-purple-600"
//         >
//           {activeLanguage}
//           <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             width="16" 
//             height="16" 
//             viewBox="0 0 24 24" 
//             fill="none" 
//             stroke="currentColor" 
//             strokeWidth="2" 
//             strokeLinecap="round" 
//             strokeLinejoin="round" 
//             className="ml-1"
//           >
//             <path d="m6 9 6 6 6-6"/>
//           </svg>
//         </button>

//         {isLanguageDropdownOpen && (
//           <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//             {languageOptions.map((option) => (
//               <div 
//                 key={option}
//                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                 onClick={() => {
//                   setActiveLanguage(option);
//                   setIsLanguageDropdownOpen(false);
//                 }}
//               >
//                 {option}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Icons */}
//       <div className="flex items-center space-x-3">
//         {/* Chat Icon */}
//         <button className="text-gray-700 hover:text-purple-600">
//           <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             width="20" 
//             height="20" 
//             viewBox="0 0 24 24" 
//             fill="none" 
//             stroke="currentColor" 
//             strokeWidth="2" 
//             strokeLinecap="round" 
//             strokeLinejoin="round"
//           >
//             <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
//           </svg>
//         </button>

//         {/* Help/Question Icon */}
//         <button className="text-gray-700 hover:text-purple-600">
//           <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             width="20" 
//             height="20" 
//             viewBox="0 0 24 24" 
//             fill="none" 
//             stroke="currentColor" 
//             strokeWidth="2" 
//             strokeLinecap="round" 
//             strokeLinejoin="round"
//           >
//             <circle cx="12" cy="12" r="10"/>
//             <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
//             <path d="M12 17h.01"/>
//           </svg>
//         </button>

//         {/* Notification Icon */}
//         <button className="text-gray-700 hover:text-purple-600">
//           <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             width="20" 
//             height="20" 
//             viewBox="0 0 24 24" 
//             fill="none" 
//             stroke="currentColor" 
//             strokeWidth="2" 
//             strokeLinecap="round" 
//             strokeLinejoin="round"
//           >
//             <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
//             <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
//           </svg>
//         </button>

//         {/* User Profile Image */}
//         <div className="w-8 h-8 rounded-full overflow-hidden">
//           <img 
//             src="/api/placeholder/32/32" 
//             alt="User Profile" 
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//           </nav>

//           <div className="flex items-center gap-3">
//             <Button variant="outline" className="text-sm hidden md:flex" onClick={handleSignupClick}>
//               Log in
//             </Button>
//             <Button className="bg-[#a414d5] hover:bg-[#8a0fb3] text-white text-sm" onClick={handleSignupClick}>
//               Sign Up
//             </Button>
//             <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t border-gray-100">
//             <div className="container mx-auto px-4 py-4">
//               <nav className="flex flex-col gap-4">
//                 <Link href="/" className={`text-sm ${isActive("/") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>Find Tutor</Link>
//                 <Link href="/projects" className={`text-sm ${isActive("/projects") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>Projects</Link>
//                 <Link href="/experts" className={`text-sm ${isActive("/experts") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>Experts</Link>
//                 <Link href="/pricing" className={`text-sm ${isActive("/pricing") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>Pricing</Link>
//                 <Link href="/contact" className={`text-sm ${isActive("/contact") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
//               </nav>
//             </div>
//           </div>
//         )}
//       </header>

//       {showSignup && <SignupModal />}
//     </>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import SignupModal from "./signup-modal";
import logo from "@/public/Group 316127881.png";
import USD from "@/public/Frame 1171284552.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const pathname = usePathname();

  const handleSignupClick = () => {
    setShowSignup(true);
    setIsMenuOpen(false);
  };
  const [activeLanguage, setActiveLanguage] = useState("English, USD");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const languageOptions = [
    "English, USD",
    "Spanish, EUR",
    "French, EUR"
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src={logo} alt="XpertBuddy Logo" width={100} height={40} className="w-26 h-10" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className={`text-md ${isActive("/") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>Find Tutor</Link>
            <Link href="/projects" className={`text-md ${isActive("/projects") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>HomeWork</Link>
            <Link href="/experts" className={`text-sm ${isActive("/experts") ? "text-[#a414d5] font-medium" : "text-[#16192c] hover:text-[#a414d5]"}`}>
              <Image src={USD} alt="XpertBuddy Logo" width={100} height={40} className="w-17 h-8" />
            </Link>
            <Link
              href="/pricing"
              className={`text-md px-3 py-1 border border-[#a414d5] rounded-lg transition ${isActive("/pricing")
                ? "text-[#a414d5] font-medium bg-[#f9f0ff]" // Optional light background for active state
                : "text-[#16192c] hover:text-[#a414d5] hover:bg-[#f9f0ff]"
                }`}
            >
              Refer a friend
            </Link>
            {/* <div className="flex items-center space-x-4">
            
              <div className="relative">
                <button
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="flex items-center text-sm text-gray-700 hover:text-purple-600"
                >
                  {activeLanguage}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {isLanguageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    {languageOptions.map((option) => (
                      <div
                        key={option}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setActiveLanguage(option);
                          setIsLanguageDropdownOpen(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

  
              <div className="flex items-center space-x-3">
             
                <button className="text-gray-700 hover:text-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </button>

            
                <button className="text-gray-700 hover:text-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                </button>

      
                <button className="text-gray-700 hover:text-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </button>

               
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    src="/api/placeholder/32/32"
                    alt="User Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div> */}
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="outline" className="text-sm hidden md:flex" onClick={handleSignupClick}>
              Log in
            </Button>
            <Button className="bg-[#a414d5] hover:bg-[#8a0fb3] text-white text-sm" onClick={handleSignupClick}>
              Sign Up
            </Button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4">
                <Link href="/" className={`text-sm ${isActive("/") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>Find Tutor</Link>
                <Link href="/projects" className={`text-sm ${isActive("/projects") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>Projects</Link>
                <Link href="/experts" className={`text-sm ${isActive("/experts") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>Experts</Link>
                <Link href="/pricing" className={`text-sm ${isActive("/pricing") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                <Link href="/contact" className={`text-sm ${isActive("/contact") ? "text-[#a414d5] font-medium" : "text-[#16192c]"}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      {showSignup && <SignupModal />}
    </>
  );
}