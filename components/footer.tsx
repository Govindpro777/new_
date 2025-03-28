import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#16192c] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#a414d5] rounded-md flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="font-semibold">Appointy</span>
            </div>
            <p className="text-gray-400 text-sm">
              AI-powered appointment scheduling platform connecting you with the perfect experts.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Download App</h3>
            <div className="flex flex-col gap-3">
              <Link href="#" className="bg-black text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <span>A</span>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Link>

              <Link href="#" className="bg-black text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <span>P</span>
                </div>
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Appointy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

