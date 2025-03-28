"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Upload } from "lucide-react"

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    deadline: "",
    budget: "",
    attachments: [] as File[],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFormData((prev) => ({
        ...prev,
        attachments: [...prev.attachments, ...newFiles],
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Project submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Project Title</Label>
        <Input
          id="title"
          name="title"
          placeholder="Enter a descriptive title for your project"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Project Category</Label>
        <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
          <SelectTrigger id="category">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="academic">Academic Writing</SelectItem>
            <SelectItem value="business">Business Consulting</SelectItem>
            <SelectItem value="technical">Technical Support</SelectItem>
            <SelectItem value="creative">Creative Work</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Project Description</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Describe your project in detail"
          rows={5}
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="deadline">Deadline</Label>
          <div className="relative">
            <Input
              id="deadline"
              name="deadline"
              type="date"
              value={formData.deadline}
              onChange={handleChange}
              required
            />
            <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Budget (USD)</Label>
          <Input
            id="budget"
            name="budget"
            type="number"
            placeholder="Enter your budget"
            value={formData.budget}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="attachments">Attachments</Label>
        <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
          <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
          <p className="text-sm text-gray-500 mb-2">Drag and drop files here, or click to browse</p>
          <Input id="attachments" type="file" multiple className="hidden" onChange={handleFileChange} />
          <Button type="button" variant="outline" onClick={() => document.getElementById("attachments")?.click()}>
            Browse Files
          </Button>
          {formData.attachments.length > 0 && (
            <div className="mt-4 text-left">
              <p className="text-sm font-medium">Attached Files:</p>
              <ul className="mt-2 space-y-1">
                {formData.attachments.map((file, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center">
                    <span className="w-4 h-4 bg-[#a414d5] rounded-full mr-2"></span>
                    {file.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <Button type="submit" className="w-full bg-[#a414d5] hover:bg-[#8a0fb3]">
        Submit Project
      </Button>
    </form>
  )
}

