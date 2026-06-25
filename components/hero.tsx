"use client"

import Image from "next/image"
import { MapPin, Search, Star, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden">
      {/* soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 size-[28rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 size-[26rem] rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t.hero.titleLead}{" "}
            <span className="text-primary">{t.hero.titleHighlight}</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.hero.desc}
          </p>

          {/* search bar */}
          <div className="mt-8 w-full max-w-xl rounded-2xl border border-border bg-card p-2 shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="flex flex-1 items-center gap-2 rounded-xl bg-muted px-3 py-2.5">
                <Search className="size-4 shrink-0 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={t.hero.searchPlaceholder}
                  className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2.5 sm:w-40">
                <MapPin className="size-4 shrink-0 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={t.hero.cityPlaceholder}
                  className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
              <Button size="lg" className="h-auto px-5 py-2.5">
                {t.hero.searchBtn}
              </Button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">
              {t.hero.popularCities}
            </span>
            {t.hero.cities.map((c) => (
              <a
                key={c}
                href="#discover"
                className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {c}
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-primary" /> {t.hero.verified}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="size-4 fill-accent text-accent" /> {t.hero.rating}
            </span>
          </div>
        </div>

        {/* visual */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
            <Image
              src="/hero-eyewear.png"
              alt={t.hero.verified}
              width={760}
              height={760}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          {/* floating stat cards (mirrored for RTL) */}
          <div className="absolute bottom-8 hidden rounded-2xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur ltr:-left-4 rtl:-right-4 sm:block">
            <p className="text-2xl font-semibold text-foreground">320+</p>
            <p className="text-xs text-muted-foreground">{t.hero.stat1Label}</p>
          </div>
          <div className="absolute top-8 hidden rounded-2xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur ltr:-right-3 rtl:-left-3 sm:block">
            <p className="text-2xl font-semibold text-primary">12</p>
            <p className="text-xs text-muted-foreground">{t.hero.stat2Label}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
