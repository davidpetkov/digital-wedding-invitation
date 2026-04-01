"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import confetti from "canvas-confetti"
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll"

const fireFlowerPetals = () => {
  const petal = confetti.shapeFromPath({
    path: "M33 7s-1.33-4.66-4-6c-3-1.5-6-1-8 2-3 4-2 12-2 12s0 5 4 7c3 1.5 8 0 10-2 3-3 0-13 0-13z",
  })

  confetti({
    shapes: [petal],
    particleCount: 100,
    spread: 80,
    origin: { y: 0.6 },
    colors: ["#ffccd5", "#ffb3c1", "#fae1dd"],
    scalar: 2,
    drift: 0.5,
  })
}

export function RsvpSection() {
  const headerRef = useRevealOnScroll<HTMLDivElement>()
  const formRef = useRevealOnScroll<HTMLFormElement>()

  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())

    const res = await fetch("/api/rsvp", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })

    setLoading(false)

    if (res.ok) {
      if (data.attendance === "yes") {
        fireFlowerPetals()
      } else if (data.attendance === "no") {
        alert("Жал ни е што нема да присуствувате, но Ви благодариме на одговорот! 💕")
      }
    } else {
      alert("Настана грешка при испраќање на пријавата.")
    }
  }

  return (
    <section className="bg-secondary/30 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-lg text-center">
        {/* Section header */}
        <div ref={headerRef}>
          {/* <p className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {"Потврдете присуство"}
          </p> */}
          <h2 className="mb-4 font-serif text-3xl font-light tracking-wide text-foreground md:text-4xl">
            {"Потврдете присуство"}
          </h2>
          <p className="mb-12 text-sm leading-relaxed text-muted-foreground">
            {"Ве молиме потврдете го вашето присуство најдоцна до 20ти мај"}

          </p>
        </div>

        {/* RSVP form */}
        <form ref={formRef} onSubmit={handleSubmit} className="rounded-sm border border-border bg-card p-8 md:p-10">
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
              <Heart className="h-6 w-6 text-primary" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <input
              name="name"
              type="text"
              placeholder="Име и презиме"
              className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />

            <div className="flex flex-col gap-2">
              <p className="text-sm text-foreground">Дали ќе присуствувате?</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="attendance-yes"
                    name="attendance"
                    value="yes"
                    className="form-radio text-primary focus:ring-primary"
                    required
                  />
                  <label htmlFor="attendance-yes" className="text-sm text-foreground">доаѓам, со задоволство</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="attendance-no"
                    name="attendance"
                    value="no"
                    className="form-radio text-primary focus:ring-primary"
                    required
                  />
                  <label htmlFor="attendance-no" className="text-sm text-foreground">за жал нема да присуствувам</label>
                </div>
              </div>
            </div>

            <input
              name="total"
              type="number"
              placeholder="Број на гости"
              className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
            <textarea
              name="message"
              placeholder="Порака за младоженците (опционално)"
              rows={3}
              className="w-full resize-none rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="mt-2 w-full rounded-sm bg-primary px-6 py-3 text-sm uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary/90"
              disabled={loading}
            >
              {loading ? "Испраќање..." : "Потврди присуство"}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
