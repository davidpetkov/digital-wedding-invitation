"use client"

import { useState } from "react"

export function EnvelopeSplash({ onOpen, onEnvelopeOpen }: { onOpen: () => void; onEnvelopeOpen: () => void }) {
  const [isOpening, setIsOpening] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  const handleOpen = () => {
    onEnvelopeOpen()
    setIsOpening(true)
    setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => {
        onOpen()
      }, 800)
    }, 1000)
  }

  // Define a darker version of Deep Moss for high-contrast text
  const textContrastColor = "#4A5445" 

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-700 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: "#AEC2A4" }} // Sage Green Base
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="floral" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="#8C9D83" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#floral)" />
        </svg>
      </div>

      <button
        onClick={handleOpen}
        className="group relative w-full flex flex-col items-center cursor-pointer focus:outline-none"
        aria-label="Отворете ја поканата"
      >
        <div className="relative" style={{ perspective: "1000px" }}>
          {/* Envelope body - Light Celadon */}
          <div className="relative h-48 w-72 rounded-sm bg-[#D2DACB] shadow-2xl md:h-56 md:w-80">
            {/* Envelope border - Deep Moss */}
            <div className="absolute inset-0 rounded-sm border border-[#8C9D83]/40" />

            {/* Fold lines */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 224" fill="none">
              <line x1="0" y1="224" x2="160" y2="100" stroke="#8C9D83" strokeWidth="1" strokeOpacity="0.5" />
              <line x1="320" y1="224" x2="160" y2="100" stroke="#8C9D83" strokeWidth="1" strokeOpacity="0.5" />
            </svg>

            {/* Wax seal - Deep Moss with Light Celadon Text */}
            <div className="absolute left-1/2 top-2/3 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#8C9D83] shadow-lg border border-[#AEC2A4]/30">
              <span className="font-serif text-lg font-bold text-[#D2DACB] drop-shadow-sm">
                {"A&K"}
              </span>
            </div>

            {/* Envelope flap */}
            <div
              className={`absolute -top-px left-0 w-full origin-top transition-transform duration-1000 ease-in-out ${
                isOpening ? "[transform:rotateX(180deg)]" : "[transform:rotateX(0deg)]"
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <svg viewBox="0 0 288 112" className="h-28 w-72 md:w-80" fill="none">
                <path d="M0 0 L144 112 L288 0 Z" fill="#D2DACB" stroke="#8C9D83" strokeWidth="1" strokeOpacity="0.4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Call to action text - Darkened Deep Moss for clarity */}
        <p
          className={`mt-10 font-serif text-xl font-medium tracking-wide transition-opacity duration-500 ${
            isOpening ? "opacity-0" : "opacity-100"
          }`}
          style={{ color: textContrastColor, textShadow: "0px 1px 1px rgba(255,255,255,0.2)" }}
        >
          {"Допрете за да ја отворите поканата"}
        </p>

        {/* Animated hint icon */}
        <div
          className={`mt-4 flex justify-center transition-opacity duration-500 ${
            isOpening ? "opacity-0" : "opacity-100"
          }`}
        >
          <svg
            className="h-6 w-6 animate-bounce"
            style={{ color: textContrastColor }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
    </div>
  )
}