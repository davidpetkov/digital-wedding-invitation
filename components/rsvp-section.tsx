"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll"

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

    if (res.ok) alert("Пријавата е успешно испратена!")
    else alert("Настана грешка при испраќање на пријавата.")
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
