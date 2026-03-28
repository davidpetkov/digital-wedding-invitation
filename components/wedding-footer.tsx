"use client"

import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll"

export function WeddingFooter() {
  const ref = useRevealOnScroll()

  return (
    <footer className="bg-secondary px-4 py-16" ref={ref}>
      <div className="mx-auto max-w-lg text-center">
        {/* Decorative element */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-border" />
          <svg
            className="h-6 w-6 text-accent"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <div className="h-px w-12 bg-border" />
        </div>

        <h2 className="font-serif text-2xl font-light tracking-wide text-foreground md:text-3xl">
          {"Ана & Кирил"}
        </h2>
        <p className="mt-2 font-serif text-sm tracking-widest text-muted-foreground">
          {"07.06.2026"}
        </p>
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          {"Со љубов и радост ве очекуваме да го споделите овој посебен ден со нас."}
        </p>

        <div className="mt-8 h-px w-16 mx-auto bg-border" />

        <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
          {"#АнаИКирил2026"}
        </p>
      </div>
    </footer>
  )
}
