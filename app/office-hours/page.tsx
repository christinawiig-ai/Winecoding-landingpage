import MatrixBottle from "@/components/matrix-bottle"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function OfficeHours() {
  return (
    <>
      <MatrixBottle />

      <main className="relative min-h-screen">
        <section className="pt-8 md:pt-16 pb-8 px-4 md:px-16 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00ff41] transition-colors text-sm mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>

            <h1 className="text-3xl md:text-4xl font-light text-[#00ff41] mb-2">Office Hours</h1>
            <p className="text-gray-400 text-sm md:text-base mb-8">
              Bi-weekly drop-in sessions at Startuplab. Show-and-tell, 1:1 consultations, and peer feedback.
            </p>

            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-2 md:p-4 overflow-hidden">
              <iframe
                src="https://luma.com/embed/calendar/cal-qHlWFqSMP9pmaKY/events?lt=dark"
                width="100%"
                height="600"
                frameBorder="0"
                style={{ border: "none", borderRadius: "12px" }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <a
                href="https://luma.com/winecoding"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00ff41] hover:text-[#00ff41]/80 transition-colors text-sm"
              >
                View on Luma
              </a>
              <Link
                href="/request-invite"
                className="inline-block px-6 py-3 bg-[#00ff41]/10 border border-[#00ff41] text-[#00ff41] rounded-lg hover:bg-[#00ff41]/20 transition-all duration-300 font-medium text-sm"
              >
                Request Invite
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
