"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How does the AI matching system work?",
    answer:
      "Our AI analyzes your requirements and preferences to match you with the most suitable expert. It considers expertise, availability, ratings, and past success with similar cases.",
  },
  {
    question: "What if I'm not satisfied with my expert?",
    answer:
      "If you're not completely satisfied with your expert, you can request a different match or get a refund according to our satisfaction guarantee policy.",
  },
  {
    question: "How much does it cost to use Appointy?",
    answer:
      "Appointy offers various pricing plans starting from free basic matching to premium subscriptions with additional features. Expert fees vary based on their expertise and experience.",
  },
  {
    question: "Can I reschedule my appointment?",
    answer:
      "Yes, you can reschedule your appointment up to 24 hours before the scheduled time without any penalty. Changes made with less notice may incur a rescheduling fee.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-[#f5f3ef]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-[#16192c]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#a414d5]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#a414d5]" />
                )}
              </button>

              {openIndex === index && <div className="px-6 pb-4 text-[#6b7b93]">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

