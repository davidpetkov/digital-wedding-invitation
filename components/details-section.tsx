"use client"

import { MapPin, Clock, Church, UtensilsCrossed, House } from "lucide-react"
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll"

function ScheduleItem({
  icon: Icon,
  time,
  title,
  description,
}: {
  icon: typeof Church
  time: string
  title: string
  description: string
}) {
  const ref = useRevealOnScroll<HTMLDivElement>()

  return (
    <div ref={ref} className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border shadow-sm">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div className="mt-2 h-full w-px bg-accent/30" />
      </div>
      <div className="pb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{time}</p>
        <h3 className="mt-1 font-serif text-xl text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export function DetailsSection() {
  const headerRef = useRevealOnScroll<HTMLDivElement>()
  const mapFrameRef = useRevealOnScroll<HTMLDivElement>()

  // Replace this URL with your specific Google Maps Embed link
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.8880430099107!2d21.37676061244372!3d41.98121345883065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135411553ca6560f%3A0x91616fd726f96d57!2sVilla%20Ina!5e0!3m2!1sen!2smk!4v1774379747848!5m2!1sen!2smk"
  return (
    <section className="bg-secondary/50 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div ref={headerRef} className="mb-16 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {"Детали за свадбата"}
          </p>
          <h2 className="font-serif text-3xl font-light tracking-wide text-foreground md:text-5xl">
            {"Кога и каде"}
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          
          {/* Left: Framed Google Map */}
          <div ref={mapFrameRef} className="relative">
            {/* The Outer "Invitation" Frame */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-primary/50 bg-card p-3 shadow-xl md:aspect-square">
              {/* Inner thin decorative border */}
              <div className="relative h-full w-full border border-accent/20">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[0.3] contrast-[0.9] transition-all duration-700 hover:grayscale-0"
                />
              </div>
              
              {/* Decorative Corner Element (Optional) */}
              <div className="absolute -top-2 -left-2 h-8 w-8 border-t border-l border-accent/40" />
              <div className="absolute -bottom-2 -right-2 h-8 w-8 border-b border-r border-accent/40" />
            </div>
          </div>

          {/* Right: Schedule timeline */}
          <div className="flex flex-col">
            <ScheduleItem
              icon={House}
              time="20:00"
              title="Вила Ина"
              description="Скопје - Горно Нерези"
            />
            {/* <ScheduleItem
              icon={UtensilsCrossed}
              time="17:00"
              title="Ресторан"
              description="Прославата продолжува во Ресторан Бела Роза, со поглед на Охридското Езеро."
            />
            <ScheduleItem
              icon={Clock}
              time="20:00"
              title="Забава"
              description="Музика, танцување и прослава до доцна во ноќта."
            /> */}

            {/* Action Button */}
            <div className="mt-4">
              <a
                href="https://maps.app.goo.gl/4KFNRTgzLagksYbR9" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-accent bg-transparent px-8 py-3 text-xs uppercase tracking-[0.2em] text-accent transition-all hover:bg-accent hover:text-white"
              >
                <MapPin className="h-4 w-4" />
                {"Отвори Навигација"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}