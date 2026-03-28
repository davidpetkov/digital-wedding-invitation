"use client"

import { useEffect, useState } from "react"
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll"

const WEDDING_DATE = new Date("2026-06-07T21:00:00")

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(): TimeLeft {
  const difference = WEDDING_DATE.getTime() - new Date().getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-sm border border-border bg-card md:h-24 md:w-24">
        <span className="font-serif text-3xl tabular-nums text-foreground md:text-4xl">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export function CountdownTimer() {
const [timeLeft, setTimeLeft] = useState<TimeLeft>({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})
  const ref = useRevealOnScroll()

  useEffect(() => {
  // set initial correct value AFTER mount
  setTimeLeft(calculateTimeLeft())

  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft())
  }, 1000)

  return () => clearInterval(timer)
}, [])

  return (
    <section className="bg-background px-4 py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {"Одбројување до нашиот ден"}
        </p>
        <h2 className="mb-12 font-serif text-3xl font-light tracking-wide text-foreground md:text-4xl">
          {"Одбројување"}
        </h2>

        <div className="flex items-center justify-center gap-4 md:gap-8">
          <CountdownUnit value={timeLeft.days} label="Денови" />
          <span className="font-serif text-2xl text-muted-foreground">:</span>
          <CountdownUnit value={timeLeft.hours} label="Часови" />
          <span className="font-serif text-2xl text-muted-foreground">:</span>
          <CountdownUnit value={timeLeft.minutes} label="Минути" />
          <span className="hidden font-serif text-2xl text-muted-foreground md:block">:</span>
          <div className="hidden md:block">
            <CountdownUnit value={timeLeft.seconds} label="Секунди" />
          </div>
        </div>
      </div>
    </section>
  )
}
