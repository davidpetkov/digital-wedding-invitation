"use client"

import { useState, useRef, useEffect } from "react"
import { EnvelopeSplash } from "@/components/envelope-splash"
import { HeroSection } from "@/components/hero-section"
import { CountdownTimer } from "@/components/countdown-timer"
import { DetailsSection } from "@/components/details-section"
import { RsvpSection } from "@/components/rsvp-section"
import { WeddingFooter } from "@/components/wedding-footer"
import RSVPForm from "@/components/ui/sheet_form"
import WeddingInvitation from "@/components/calendar"

export default function WeddingPage() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const startAudio = () => {
    if (audioRef.current) {
      audioRef.current.muted = false
      audioRef.current.volume = 0.5
      audioRef.current.play().catch((e) => console.error("Error playing audio:", e))
      setIsMusicPlaying(true)
    }
  }

  useEffect(() => {
    if (audioRef.current && !isMusicPlaying) {
      audioRef.current.pause()
    }
  }, [isMusicPlaying])

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Audio element */}
      <audio ref={audioRef} src="/umilkuvanje.mp3" loop preload="auto" muted />

      {/* Splash screen envelope */}
      {!isEnvelopeOpen && (
        <EnvelopeSplash onOpen={() => setIsEnvelopeOpen(true)} onEnvelopeOpen={startAudio} />
      )}

      {/* Main wedding content */}
      <div
        className={`transition-opacity duration-1000 ${isEnvelopeOpen ? "opacity-100" : "opacity-0"
          }`}
      >
        <HeroSection />
        <div className="flex items-center justify-center bg-secondary/50 py-8">
          <FloralDivider />
        </div>

        <DetailsSection />

        <div className="flex items-center justify-center bg-secondary/80 py-8">
          <FloralDivider />
        </div>

        <WeddingInvitation />

        {/* Floral divider between sections */}
        <div className="flex items-center justify-center bg-background py-8">
          <FloralDivider />
        </div>

        <CountdownTimer />


        <div className="flex items-center justify-center bg-secondary/30 py-8">
          <FloralDivider />
        </div>

        <RsvpSection />

        <WeddingFooter />
      </div>
    </main>
  )
}

function FloralDivider() {
  return (
    <svg
      className="h-8 w-48 text-accent/40"
      viewBox="0 0 200 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left branch */}
      <path
        d="M10 16 Q40 8 60 16 Q80 24 100 16"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      {/* Right branch */}
      <path
        d="M100 16 Q120 8 140 16 Q160 24 190 16"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      {/* Center leaf */}
      <ellipse cx="100" cy="14" rx="4" ry="6" fill="currentColor" opacity="0.5" transform="rotate(-20 100 14)" />
      <ellipse cx="100" cy="14" rx="4" ry="6" fill="currentColor" opacity="0.5" transform="rotate(20 100 14)" />
      {/* Small leaves */}
      <ellipse cx="55" cy="13" rx="3" ry="5" fill="currentColor" opacity="0.3" transform="rotate(-30 55 13)" />
      <ellipse cx="145" cy="13" rx="3" ry="5" fill="currentColor" opacity="0.3" transform="rotate(30 145 13)" />
      <ellipse cx="75" cy="18" rx="2.5" ry="4" fill="currentColor" opacity="0.3" transform="rotate(25 75 18)" />
      <ellipse cx="125" cy="18" rx="2.5" ry="4" fill="currentColor" opacity="0.3" transform="rotate(-25 125 18)" />
      {/* Dots */}
      <circle cx="30" cy="14" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="170" cy="14" r="1.5" fill="currentColor" opacity="0.4" />
    </svg>
  )
}
