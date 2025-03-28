import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function ExpertSection() {
  return (
    <section className="py-16 bg-[#fcf4ea]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Reach Out to the Expert Now</h2>
          <p className="text-[#6b7b93] max-w-2xl mx-auto">
            Our platform connects you with verified experts in various fields. Book appointments with just a few clicks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((expert) => (
            <div key={expert} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image
                    src={`/placeholder.svg?height=64&width=64`}
                    alt="Expert avatar"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-semibold">Dr. Sarah Johnson</h3>
                  <p className="text-sm text-[#6b7b93]">Professional Coach, Ph.D.</p>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-[#ffb800] text-[#ffb800]" />
                    ))}
                    <span className="text-xs ml-1 text-[#6b7b93]">(120+ reviews)</span>
                  </div>
                </div>
              </div>

              <div className="px-4 pb-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-sm text-[#6b7b93]">Next Available</div>
                  <div className="text-sm font-medium">Today, 2:00 PM</div>
                </div>

                <Button className="w-full bg-[#a414d5] hover:bg-[#8a0fb3]">Book Now</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" className="border-[#a414d5] text-[#a414d5]">
            View All Experts
          </Button>
        </div>
      </div>
    </section>
  )
}

