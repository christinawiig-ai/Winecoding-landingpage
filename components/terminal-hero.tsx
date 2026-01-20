"use client"

import { useEffect, useState } from "react"

export default function TerminalHero() {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const sequence = [
      { action: "type", text: "V", delay: 150 },
      { action: "type", text: "i", delay: 100 },
      { action: "type", text: "b", delay: 100 },
      { action: "type", text: "e", delay: 100 },
      { action: "pause", delay: 800 },
      { action: "backspace", delay: 100 },
      { action: "backspace", delay: 100 },
      { action: "backspace", delay: 300 },
      { action: "backspace", delay: 300 },
      { action: "type", text: "W", delay: 150 },
      { action: "type", text: "i", delay: 100 },
      { action: "type", text: "n", delay: 100 },
      { action: "type", text: "e", delay: 100 },
      { action: "type", text: " ", delay: 100 },
      { action: "type", text: "C", delay: 150 },
      { action: "type", text: "o", delay: 100 },
      { action: "type", text: "d", delay: 100 },
      { action: "type", text: "i", delay: 100 },
      { action: "type", text: "n", delay: 100 },
      { action: "type", text: "g", delay: 100 },
      { action: "type", text: ".", delay: 200 },
      { action: "type", text: ".", delay: 200 },
      { action: "type", text: ".", delay: 200 },
      { action: "pause", delay: 500 },
      { action: "type", text: "🍷", delay: 100 },
    ]

    let currentText = ""
    let timeoutId: NodeJS.Timeout
    let currentStep = 0

    const executeStep = () => {
      if (currentStep >= sequence.length) return

      const step = sequence[currentStep]

      if (step.action === "type") {
        currentText += step.text
        setDisplayText(currentText)
      } else if (step.action === "backspace") {
        currentText = currentText.slice(0, -1)
        setDisplayText(currentText)
      }

      currentStep++
      timeoutId = setTimeout(executeStep, step.delay)
    }

    executeStep()

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Flicker overlay effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10 animate-flicker" />

      {/* Terminal window */}
      <div className="relative w-full max-w-2xl">
        <div className="px-2 md:px-4 py-4 md:py-6">
          <div
            className="font-mono text-[1.5rem] sm:text-[2rem] md:text-[3.2rem] lg:text-[4rem] tracking-wider font-bold whitespace-nowrap"
            style={{ fontFamily: "'Courier New', Courier, monospace" }}
          >
            <span className="text-[#00ff41] drop-shadow-[0_0_25px_rgba(0,255,65,0.7)] drop-shadow-[0_0_50px_rgba(0,255,65,0.4)]">
              {displayText}
            </span>
            <span
              className={`inline-block w-2 md:w-4 h-6 sm:h-8 md:h-12 lg:h-16 ml-1 md:ml-2 bg-[#00ff41] drop-shadow-[0_0_20px_rgba(0,255,65,0.6)] ${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity`}
              style={{ verticalAlign: "middle" }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flicker {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.08; }
        }
        .animate-flicker {
          animation: flicker 0.15s infinite;
          background: linear-gradient(
            transparent 0%,
            rgba(0, 255, 65, 0.05) 50%,
            transparent 100%
          );
        }
      `}</style>
    </div>
  )
}
