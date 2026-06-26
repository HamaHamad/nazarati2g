"use client"

import { Lock, Truck, Boxes, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

const icons = [Lock, Boxes, Truck, TrendingUp]

export function WholesalerSection() {
  const { t } = useLanguage()
  const w = t.wholesaler

  return (
    <section
      id="wholesalers"
      className="relative overflow-hidden border-y border-border bg-foreground text-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 size-96 rounded-full bg-primary/30 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-background/20 px-3 py-1 text-xs font-medium text-background/80">
              <Lock className="size-3" /> {w.badge}
            </span>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {w.title}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-background/75">
              {w.desc}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="h-auto px-5 py-2.5"
                render={<a href="/vendor/register" />}
              >
                {w.applyBtn}
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="h-auto px-5 py-2.5 text-background hover:bg-background/10 hover:text-background"
                render={<a href="#how-it-works" />}
              >
                {w.seeHowBtn}
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {w.benefits.map((b, i) => {
              const Icon = icons[i]
              return (
                <div
                  key={b.title}
                  className="rounded-2xl border border-background/15 bg-background/5 p-5 backdrop-blur"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-background/70">
                    {b.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
