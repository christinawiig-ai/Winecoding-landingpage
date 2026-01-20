"use client"

import { useEffect, useRef } from "react"

export default function MatrixBottle() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const fontSize = 10
    const columns = Math.floor(canvas.width / fontSize)

    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    const bottleShape = (x: number, y: number): boolean => {
      const isMobile = canvas.width < 768
      const centerX = isMobile ? canvas.width * 0.8 : canvas.width * 0.7
      const centerY = isMobile ? canvas.height * 0.7 : canvas.height / 2
      const scale = isMobile ? 0.5 : 1

      const relX = (x - centerX) / scale
      const relY = (y - centerY) / scale

      // Cap (top narrow part)
      if (relY < -280 && relY > -320 && Math.abs(relX) < 50) return true

      // Neck
      if (relY >= -280 && relY < -160 && Math.abs(relX) < 55) return true

      // Shoulder transition
      if (relY >= -160 && relY < -80) {
        const progress = (relY + 160) / 80
        const shoulderWidth = 55 + progress * 85
        if (Math.abs(relX) < shoulderWidth) return true
      }

      // Main body
      if (relY >= -80 && relY < 200) {
        const bodyWidth = 140
        if (Math.abs(relX) < bodyWidth) return true
      }

      // Bottom taper
      if (relY >= 200 && relY < 260) {
        const progress = (relY - 200) / 60
        const bottomWidth = 140 - progress * 25
        if (Math.abs(relX) < bottomWidth) return true
      }

      // Base
      if (relY >= 260 && relY < 280) {
        if (Math.abs(relX) < 120) return true
      }

      return false
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      const currentColumns = Math.floor(canvas.width / fontSize)
      while (drops.length < currentColumns) drops.push(Math.random() * -100)
      while (drops.length > currentColumns) drops.pop()

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize
        const y = drops[i] * fontSize

        const isInBottle = bottleShape(x, y)

        if (isInBottle) {
          ctx.shadowBlur = 30
          ctx.shadowColor = "#00ff00"
          ctx.fillStyle = "#00ff00"
        } else {
          ctx.shadowBlur = 0
          ctx.fillStyle = "rgba(0, 255, 0, 0.03)"
        }

        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(char, x, y)

        if (!isInBottle) {
          const nearBottle =
            bottleShape(x - fontSize, y) ||
            bottleShape(x + fontSize, y) ||
            bottleShape(x, y - fontSize) ||
            bottleShape(x, y + fontSize)

          if (nearBottle) {
            ctx.fillStyle = "rgba(0, 0, 0, 0.9)"
            ctx.fillText(char, x, y)
          }
        }

        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 40)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10 bg-black" />
}
