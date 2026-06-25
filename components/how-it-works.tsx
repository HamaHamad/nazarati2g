"use client"

import { Search, MousePointerClick, ShoppingBag, Glasses } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const icons = [Search, Glasses, MousePointerClick, ShoppingBag]

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section id="how-it-works" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t.how.eyebrow}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.how.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.how.steps.map((s, i) => {
            const Icon = icons[i]
            return (
              <div
                key={s.title}
                className="relative rounded-2xl border border-border bg-card p-6"
              >
                <span className="absolute top-5 text-4xl font-semibold text-muted/60 ltr:right-5 rtl:left-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
