import Image from "next/image"

export default function HowItWorks() {
  return (
    <section className="bg-[#faf3fd] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-40 relative mb-4">
              <Image src="/placeholder.svg?height=160&width=280" alt="Step 1" fill className="object-contain" />
            </div>
            <div className="inline-block bg-[#faf3fd] text-[#a414d5] px-3 py-1 rounded-full text-sm font-medium mb-3">
              Step 1
            </div>
            <h3 className="text-xl font-semibold mb-2">Tell Us Your Needs</h3>
            <p className="text-[#6b7b93]">
              Describe what you're looking for and our AI will match you with the perfect expert.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-40 relative mb-4">
              <Image src="/placeholder.svg?height=160&width=280" alt="Step 2" fill className="object-contain" />
            </div>
            <div className="inline-block bg-[#faf3fd] text-[#a414d5] px-3 py-1 rounded-full text-sm font-medium mb-3">
              Step 2
            </div>
            <h3 className="text-xl font-semibold mb-2">Browse Experts</h3>
            <p className="text-[#6b7b93]">View profiles, ratings, and availability of our qualified experts.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-40 relative mb-4">
              <Image src="/placeholder.svg?height=160&width=280" alt="Step 3" fill className="object-contain" />
            </div>
            <div className="inline-block bg-[#faf3fd] text-[#a414d5] px-3 py-1 rounded-full text-sm font-medium mb-3">
              Step 3
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Expert Help Fast</h3>
            <p className="text-[#6b7b93]">Schedule a time that works for you and connect with your expert.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

