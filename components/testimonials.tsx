import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Feedback from Appointy Community</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((testimonial) => (
            <div key={testimonial} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image src={`/placeholder.svg?height=48&width=48`} alt="User avatar" fill className="object-cover" />
                </div>

                <div>
                  <h3 className="font-semibold">Alex Thompson</h3>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-[#ffb800] text-[#ffb800]" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-[#6b7b93]">
                "The AI matching was spot on! I found the perfect expert for my needs and the scheduling process was
                seamless. Highly recommend this platform."
              </p>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#faf3fd] flex items-center justify-center">
                    <span className="text-xs text-[#a414d5]">A</span>
                  </div>
                  <span className="text-xs ml-2 text-[#6b7b93]">Appointment with Dr. Sarah Johnson</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

