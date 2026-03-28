"use client"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-start overflow-hidden pt-[10vh]">
      {/* Background container with TINT OVERLAY */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/images/hero_bg_mobile.png"
          />
          <img
            src="/images/hero_bg.png"
            alt="Свадбена декорација"
            className="h-full w-full object-cover object-top"
          />
        </picture>
        {/* THE TINT OVERLAY: Knocks back the brightness evenly */}
        <div className="absolute inset-0 bg-stone-950/40" />
      </div>

      {/* CONTENT: All light text now perfectly legible */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center text-white drop-shadow-sm">
        
        {/* 1. The Body Text (Moved up, dark tint makes it clear) */}
        <p className="max-w-[280px] font-sans text-xs uppercase tracking-[0.3em] text-white/80 md:text-sm">
          {"Со полни срца и искрена радост,"}
          <br />
          {"ве покануваме да ја славиме љубовта заедно."}
        </p>

        {/* Small separator */}
        <div className="my-6 h-px w-10 bg-white/30" />

        {/* 2. The Header (Names) */}
        <h1 className="font-serif text-5xl font-light italic leading-tight tracking-wide md:text-7xl lg:text-8xl">
  {"Ана"}
  <span className="mx-3 font-sans text-3xl font-light italic text-white/70 md:mx-4 md:text-5xl lg:text-6xl">
    {"&"}
  </span>
  {"Кирил"}
</h1>

      </div>

      {/* FOOTER: Scroll Indicator (Tint makes white clear here too) */}
      <div className="absolute bottom-8 z-10 flex flex-col items-center text-white/50">
        <span className="mb-2 text-[10px] uppercase tracking-[0.4em]">
          {"Повлечи надолу"}
        </span>
        <div className="h-10 w-px bg-white/20">
          <div className="h-1/2 w-full animate-pulse bg-white/40" />
        </div>
      </div>
    </section>
  )
}