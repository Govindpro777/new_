"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2, BookOpen } from "lucide-react"

interface BibliographyEntry {
  id: number
  type: string
  title: string
  authors: string
  year: string
  source: string
  annotation: string
}

export default function BibliographyComponent() {
  const [entries, setEntries] = useState<BibliographyEntry[]>([
    {
      id: 1,
      type: "journal",
      title: "The Impact of Artificial Intelligence on Modern Society",
      authors: "Johnson, S., & Smith, T.",
      year: "2023",
      source: "Journal of Technology and Society, 45(2), 112-128",
      annotation:
        "This article provides a comprehensive overview of how AI is transforming various aspects of society, including employment, education, and healthcare.",
    },
  ])

  const [newEntry, setNewEntry] = useState<BibliographyEntry>({
    id: 0,
    type: "",
    title: "",
    authors: "",
    year: "",
    source: "",
    annotation: "",
  })

  const [isAdding, setIsAdding] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewEntry((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setNewEntry((prev) => ({ ...prev, [name]: value }))
  }

  const addEntry = () => {
    if (newEntry.title && newEntry.authors) {
      setEntries((prev) => [...prev, { ...newEntry, id: Date.now() }])
      setNewEntry({
        id: 0,
        type: "",
        title: "",
        authors: "",
        year: "",
        source: "",
        annotation: "",
      })
      setIsAdding(false)
    }
  }

  const removeEntry = (id: number) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== id))
  }

  return (
    <div className="space-y-6">
      <p className="text-[#6b7b93]">
        Create an annotated bibliography for your project. This will help your expert understand the sources you're
        working with.
      </p>

      <div className="space-y-4">
        {entries.map((entry) => (
          <div key={entry.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#a414d5]" />
                <h3 className="font-medium">{entry.title}</h3>
              </div>
              <button className="text-gray-400 hover:text-red-500" onClick={() => removeEntry(entry.id)}>
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-2 text-sm text-[#6b7b93]">
              <p>
                <span className="font-medium">Authors:</span> {entry.authors}
              </p>
              <p>
                <span className="font-medium">Year:</span> {entry.year}
              </p>
              <p>
                <span className="font-medium">Source:</span> {entry.source}
              </p>
              <p className="mt-2">
                <span className="font-medium">Annotation:</span> {entry.annotation}
              </p>
            </div>
          </div>
        ))}
      </div>

      {isAdding ? (
        <div className="border rounded-lg p-4 space-y-4">
          <h3 className="font-medium">Add New Source</h3>

          <div className="space-y-2">
            <Label htmlFor="type">Source Type</Label>
            <Select value={newEntry.type} onValueChange={(value) => handleSelectChange("type", value)}>
              <SelectTrigger id="type">
                <SelectValue placeholder="Select source type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="book">Book</SelectItem>
                <SelectItem value="journal">Journal Article</SelectItem>
                <SelectItem value="website">Website</SelectItem>
                <SelectItem value="conference">Conference Paper</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={newEntry.title}
              onChange={handleInputChange}
              placeholder="Enter source title"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="authors">Authors</Label>
            <Input
              id="authors"
              name="authors"
              value={newEntry.authors}
              onChange={handleInputChange}
              placeholder="e.g., Smith, J., & Johnson, A."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="year">Year</Label>
              <Input
                id="year"
                name="year"
                value={newEntry.year}
                onChange={handleInputChange}
                placeholder="e.g., 2023"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="source">Source Details</Label>
              <Input
                id="source"
                name="source"
                value={newEntry.source}
                onChange={handleInputChange}
                placeholder="e.g., Journal name, volume, pages"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="annotation">Annotation</Label>
            <Textarea
              id="annotation"
              name="annotation"
              value={newEntry.annotation}
              onChange={handleInputChange}
              placeholder="Brief summary and relevance to your project"
              rows={3}
            />
          </div>

          <div className="flex gap-2">
            <Button type="button" className="bg-[#a414d5] hover:bg-[#8a0fb3]" onClick={addEntry}>
              Add Source
            </Button>
            <Button type="button" variant="outline" onClick={() => setIsAdding(false)}>
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <Button
          type="button"
          variant="outline"
          className="w-full border-dashed border-[#a414d5] text-[#a414d5]"
          onClick={() => setIsAdding(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Bibliography Entry
        </Button>
      )}
    </div>
  )
}

