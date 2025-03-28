import { Button } from "@/components/ui/button"
import ProjectForm from "@/components/project-form"
import ExpertSelection from "@/components/expert-selection"
import BibliographyComponent from "@/components/bibliography-component"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#faf3fd] py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[#16192c]">Projects</h1>
          <p className="text-center text-[#6b7b93] mt-4 max-w-2xl mx-auto">
            Submit your project details and get matched with the perfect expert. Our AI will help you find the best
            match for your specific needs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Submit a Project</h2>
              <ProjectForm />
            </div>

            <div className="mt-8 bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Annotated Bibliography</h2>
              <BibliographyComponent />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Choose an Expert for Your Project</h2>
              <ExpertSelection />

              <div className="mt-8 bg-[#faf3fd] rounded-lg p-4">
                <h3 className="font-medium text-[#a414d5]">Need Help?</h3>
                <p className="text-sm text-[#6b7b93] mt-2">
                  Our AI can help you find the perfect expert based on your project requirements.
                </p>
                <Button className="w-full mt-4 bg-[#a414d5] hover:bg-[#8a0fb3]">Get AI Recommendations</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

