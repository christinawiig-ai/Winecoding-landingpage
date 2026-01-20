"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import MatrixBottle from "@/components/matrix-bottle"

export default function RequestInvitePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    codingExperience: "",
    interests: [] as string[],
    referralSources: [] as string[],
    referralOther: "",
    reason: "",
  })
  const [interestsOpen, setInterestsOpen] = useState(false)
  const [referralOpen, setReferralOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleInterestChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((i) => i !== value)
        : [...prev.interests, value],
    }))
  }

  const handleReferralChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      referralSources: prev.referralSources.includes(value)
        ? prev.referralSources.filter((r) => r !== value)
        : [...prev.referralSources, value],
    }))
  }

  const codingOptions = [
    { value: "none", label: "What's a terminal?" },
    { value: "low", label: "I can copy-paste from ChatGPT with confidence" },
    { value: "ai-assisted", label: "I've played with vibe coding tools (Lovable, Databutton, v0...)" },
    { value: "intermediate", label: "I've mass-produced spaghetti code and mass-consumed wine" },
    { value: "comfortable", label: "I can Google Stack Overflow like a pro" },
    { value: "experienced", label: "I've shipped actual products (and cried only twice)" },
    { value: "advanced", label: "I mass-produce production-ready code" },
  ]

  const interestOptions = [
    { value: "ship", label: "I have ideas but struggle to ship them (and my unfinished projects haunt me)" },
    { value: "accountability", label: "I want accountability — and wine helps" },
    { value: "network", label: "I want to meet women who actually build (not just network)" },
    { value: "ai", label: "I want to learn how to build faster with AI" },
    { value: "structure", label: "I want a structured push to get my project off the ground" },
    { value: "wine", label: "And yes… I heard there was wine" },
  ]

  const referralOptions = [
    { value: "startuplab", label: "Startuplab" },
    { value: "vibelabs", label: "Vibelabs" },
    { value: "social", label: "Social media" },
    { value: "friend", label: "Friend or word of mouth" },
    { value: "event", label: "A Winecoding event" },
    { value: "algorithm", label: "The algorithm knows me too well" },
    { value: "other", label: "Other" },
  ]

  return (
    <>
      <MatrixBottle />

      <main className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-4 md:py-8">
        <div className="w-full max-w-md">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-[#00ff41] transition-colors mb-3 md:mb-4 text-sm md:text-base"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>

          {!submitted ? (
            <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6">
              <h1 className="text-2xl md:text-3xl font-light text-white mb-2">Request Invite</h1>
              <p className="text-[#00ff41] mb-4 md:mb-6 text-sm md:text-base">Join The Wine Coding Community</p>

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff41] transition-colors text-sm md:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff41] transition-colors text-sm md:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-xs md:text-sm text-gray-300 mb-1">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff41] transition-colors text-sm md:text-base"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <label htmlFor="codingExperience" className="block text-xs md:text-sm text-gray-300 mb-1">
                    Coding experience level
                  </label>
                  <select
                    id="codingExperience"
                    name="codingExperience"
                    value={formData.codingExperience}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#00ff41] transition-colors appearance-none cursor-pointer text-sm md:text-base"
                  >
                    <option value="" disabled className="bg-black text-gray-500">
                      Select your vibe...
                    </option>
                    {codingOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-black text-white">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <label className="block text-xs md:text-sm text-gray-300 mb-1">
                    What brings you here? <span className="text-gray-500">(Select all that apply)</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setInterestsOpen(!interestsOpen)}
                    className="w-full px-3 md:px-4 py-2 bg-black/50 border border-white/20 rounded-lg text-left focus:outline-none focus:border-[#00ff41] transition-colors text-sm md:text-base flex justify-between items-center"
                  >
                    <span className={formData.interests.length > 0 ? "text-white" : "text-gray-500"}>
                      {formData.interests.length > 0
                        ? `${formData.interests.length} selected`
                        : "Pick your reasons..."}
                    </span>
                    <svg className={`w-4 h-4 text-gray-400 transition-transform ${interestsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {interestsOpen && (
                    <div className="absolute z-20 w-full mt-1 bg-black/95 border border-white/20 rounded-lg overflow-hidden">
                      {interestOptions.map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center gap-2 px-3 py-2 cursor-pointer transition-all text-xs md:text-sm ${
                            formData.interests.includes(option.value)
                              ? "bg-[#00ff41]/10 text-white"
                              : "text-gray-300 hover:bg-white/5"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(option.value)}
                            onChange={() => handleInterestChange(option.value)}
                            className="accent-[#00ff41]"
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-xs md:text-sm text-gray-300 mb-1">
                    How did you hear about us? <span className="text-gray-500">(Select all that apply)</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setReferralOpen(!referralOpen)}
                    className="w-full px-3 md:px-4 py-2 bg-black/50 border border-white/20 rounded-lg text-left focus:outline-none focus:border-[#00ff41] transition-colors text-sm md:text-base flex justify-between items-center"
                  >
                    <span className={formData.referralSources.length > 0 ? "text-white" : "text-gray-500"}>
                      {formData.referralSources.length > 0
                        ? `${formData.referralSources.length} selected`
                        : "Spill the tea..."}
                    </span>
                    <svg className={`w-4 h-4 text-gray-400 transition-transform ${referralOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {referralOpen && (
                    <div className="absolute z-20 w-full mt-1 bg-black/95 border border-white/20 rounded-lg overflow-hidden">
                      {referralOptions.map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center gap-2 px-3 py-2 cursor-pointer transition-all text-xs md:text-sm ${
                            formData.referralSources.includes(option.value)
                              ? "bg-[#00ff41]/10 text-white"
                              : "text-gray-300 hover:bg-white/5"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.referralSources.includes(option.value)}
                            onChange={() => handleReferralChange(option.value)}
                            className="accent-[#00ff41]"
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {formData.referralSources.includes("other") && (
                  <div>
                    <label htmlFor="referralOther" className="block text-xs md:text-sm text-gray-300 mb-1">
                      Tell us more...
                    </label>
                    <input
                      type="text"
                      id="referralOther"
                      name="referralOther"
                      value={formData.referralOther}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff41] transition-colors text-sm md:text-base"
                      placeholder="Where did you find us?"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="reason" className="block text-xs md:text-sm text-gray-300 mb-1">
                    Anything else we should know?
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-3 md:px-4 py-2 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff41] transition-colors resize-none text-sm md:text-base"
                    placeholder="Your wildest startup idea, your favorite wine, or just say hi..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 md:px-8 py-2.5 md:py-3 bg-[#00ff41]/10 border border-[#00ff41] text-[#00ff41] rounded-lg hover:bg-[#00ff41]/20 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-black/50 backdrop-blur-md border border-[#00ff41]/30 rounded-xl p-6 md:p-8 text-center">
              <div className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 md:mb-6 rounded-full bg-[#00ff41]/10 flex items-center justify-center">
                <svg
                  className="w-6 md:w-8 h-6 md:h-8 text-[#00ff41]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-light text-white mb-3 md:mb-4">Request Received</h2>
              <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
                Thanks for your interest in Wine Coding! We&apos;ll review your request and get back to you soon. Keep
                those vibes ready.
              </p>
              <Link
                href="/"
                className="inline-block px-6 md:px-8 py-3 md:py-4 bg-[#00ff41]/10 border border-[#00ff41] text-[#00ff41] rounded-lg hover:bg-[#00ff41]/20 transition-all duration-300 font-medium text-sm md:text-base"
              >
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
