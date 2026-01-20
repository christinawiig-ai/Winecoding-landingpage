import MatrixBottle from "@/components/matrix-bottle"
import TerminalHero from "@/components/terminal-hero"
import Image from "next/image"
import Link from "next/link"
import { GraduationCap, Calendar, Users } from "lucide-react"

export default function Home() {
  return (
    <>
      <MatrixBottle />

      <main className="relative min-h-screen">
        {/* Hero Section */}
        <section className="pt-12 md:pt-32 pb-4 md:pb-8 flex items-start justify-start px-4 md:px-16 lg:px-24">
          <div className="w-full max-w-2xl">
            <TerminalHero />
            <p className="text-gray-400 text-sm md:text-base mt-4 font-light">
              AI community for women builders in Oslo
            </p>
            <Link
              href="/request-invite"
              className="inline-block mt-6 px-6 py-3 bg-[#00ff41]/10 border border-[#00ff41] text-[#00ff41] rounded-lg hover:bg-[#00ff41]/20 transition-all duration-300 font-medium text-sm"
            >
              Request Invite
            </Link>
          </div>
        </section>

        {/* 3 Cards Section */}
        <section className="px-4 md:px-16 lg:px-24 py-8 md:py-16 relative flex justify-center">
          <div className="max-w-5xl w-full relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Card 1 - Vibecoding Workshops */}
              <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-5 md:p-8 hover:border-[#00ff41]/30 transition-all duration-300 flex flex-col">
                <GraduationCap className="w-8 h-8 text-[#00ff41] mb-4" />
                <h3 className="text-xl md:text-2xl font-light text-white mb-3">Vibecoding Workshops</h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base flex-grow">
                  Full-day courses teaching AI-assisted development. Build production-ready prototypes with minimal traditional coding.
                </p>
                <p className="text-gray-500 text-xs md:text-sm mb-2">
                  Level 1 (Beginners) + Level 2 (Claude Code)
                </p>
                <p className="text-[#00ff41] text-xs md:text-sm font-medium mb-4">
                  Members get exclusive discounts
                </p>
                <a
                  href="https://vibelabs.no/dagskurs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#00ff41]/10 border border-[#00ff41] text-[#00ff41] rounded-lg hover:bg-[#00ff41]/20 transition-all duration-300 text-sm text-center"
                >
                  View Courses
                </a>
              </div>

              {/* Card 2 - Office Hours */}
              <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-5 md:p-8 hover:border-[#00ff41]/30 transition-all duration-300 flex flex-col">
                <Calendar className="w-8 h-8 text-[#00ff41] mb-4" />
                <h3 className="text-xl md:text-2xl font-light text-white mb-3">Office Hours</h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base flex-grow">
                  Bi-weekly drop-in sessions at Startuplab. Show-and-tell, 1:1 consultations, and peer feedback.
                </p>
                <p className="text-gray-500 text-xs md:text-sm mb-4">
                  Every 2 weeks, 2-4 PM
                </p>
                <Link
                  href="/office-hours"
                  className="inline-block px-4 py-2 bg-[#00ff41]/10 border border-[#00ff41] text-[#00ff41] rounded-lg hover:bg-[#00ff41]/20 transition-all duration-300 text-sm text-center"
                >
                  View Calendar
                </Link>
              </div>

              {/* Card 3 - Community */}
              <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-5 md:p-8 hover:border-[#00ff41]/30 transition-all duration-300 flex flex-col">
                <Users className="w-8 h-8 text-[#00ff41] mb-4" />
                <h3 className="text-xl md:text-2xl font-light text-white mb-3">Community</h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base flex-grow">
                  WhatsApp group for peer support, collaboration, and staying connected between sessions.
                </p>
                <p className="text-gray-500 text-xs md:text-sm mb-4">
                  Members-only
                </p>
                <Link
                  href="/request-invite"
                  className="inline-block px-4 py-2 bg-[#00ff41]/10 border border-[#00ff41] text-[#00ff41] rounded-lg hover:bg-[#00ff41]/20 transition-all duration-300 text-sm text-center"
                >
                  Request Invite
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 md:px-16 lg:px-24 py-8 md:py-12 mb-4 md:mb-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-4xl text-[#00ff41] font-light tracking-wide mb-4 md:mb-6">
              Code. Sip. Ship.
            </p>
          </div>
        </section>

        <section className="px-4 md:px-16 lg:px-24 py-0 pb-10 md:pb-16 flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <Link
              href="/request-invite"
              className="inline-block px-6 md:px-8 py-3 md:py-4 bg-[#00ff41]/10 border border-[#00ff41] text-[#00ff41] rounded-lg hover:bg-[#00ff41]/20 transition-all duration-300 font-medium text-sm md:text-base"
            >
              Request invite
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 md:px-16 lg:px-24 py-12 md:py-16 border-t border-white/10 bg-black/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
              {/* Left - Branding */}
              <div>
                <h4 className="text-xl font-light text-white mb-2">Winecoding</h4>
                <p className="text-gray-400 text-sm">AI community for women builders</p>
              </div>

              {/* Center - Links */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://luma.com/winecoding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00ff41] transition-colors text-sm"
                >
                  Calendar
                </a>
                <Link
                  href="/request-invite"
                  className="text-gray-400 hover:text-[#00ff41] transition-colors text-sm"
                >
                  Request Invite
                </Link>
                <a
                  href="https://event.checkin.no/215438/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00ff41] transition-colors text-sm"
                >
                  Level 1 Course
                </a>
                <a
                  href="https://event.checkin.no/216491/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00ff41] transition-colors text-sm"
                >
                  Level 2 Course
                </a>
              </div>

              {/* Right - Partners */}
              <div className="flex flex-col gap-4 md:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">Hosted at</span>
                  <Image src="/startuplab-logo.svg" alt="Startuplab" width={100} height={30} className="h-6 w-auto" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">In partnership with</span>
                  <Image src="/vibelabs-logo-light.svg" alt="Vibelabs" width={80} height={24} className="h-5 w-auto" />
                </div>
              </div>
            </div>

            {/* Bottom - Copyright */}
            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-gray-500 text-xs">© 2026 Winecoding</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
