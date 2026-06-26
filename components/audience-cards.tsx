"use client"

import { Users, Store, Truck, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const meta = [
  { icon: Users, href: "#discover", featured: false },
  { icon: Store, href: "/vendor/register", featured: true },
  { icon: Truck, href: "/vendor/register", featured: false },
]

export function AudienceCards() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          {t.audience.eyebrow}
        </span>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {t.audience.title}
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">{t.audience.desc}</p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {t.audience.cards.map((a, i) => {
          const m = meta[i]
          const Icon = m.icon
          return (
            <div
              key={a.tag}
              className={`flex flex-col rounded-2xl border p-6 transition-shadow hover:shadow-lg ${
                m.featured
                  ? "border-primary/40 bg-primary text-primary-foreground shadow-lg"
                  : "border-border bg-card"
              }`}
            >
              <span
                className={`flex size-11 items-center justify-center rounded-xl ${
                  m.featured
                    ? "bg-primary-foreground/15 text-primary-foreground"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <Icon className="size-5" />
              </span>
              <p
                className={`mt-5 text-xs font-semibold uppercase tracking-wider ${
                  m.featured ? "text-primary-foreground/80" : "text-primary"
                }`}
              >
                {a.tag}
              </p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">
                {a.title}
              </h3>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  m.featured
                    ? "text-primary-foreground/85"
                    : "text-muted-foreground"
                }`}
              >
                {a.desc}
              </p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {a.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <span
                      className={`flex size-4 items-center justify-center rounded-full ${
                        m.featured
                          ? "bg-accent text-accent-foreground"
                          : "bg-accent/20 text-primary"
                      }`}
                    >
                      <ArrowRight className="size-2.5 rtl:rotate-180" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={m.href}
                className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${
                  m.featured ? "text-primary-foreground" : "text-primary"
                }`}
              >
                {a.cta}
                <ArrowRight className="size-4 rtl:rotate-180" />
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
