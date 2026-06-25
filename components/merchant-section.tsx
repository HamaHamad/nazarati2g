"use client"

import { Upload, Pencil, Trash2, BarChart3, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

const capIcons = [Upload, Pencil, Trash2, BarChart3]

export function MerchantSection() {
  const { t } = useLanguage()
  const m = t.merchant

  return (
    <section id="merchants" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* dashboard mockup */}
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-destructive/60" />
                <span className="size-2.5 rounded-full bg-accent" />
                <span className="size-2.5 rounded-full bg-primary/50" />
              </div>
              <p className="text-xs font-medium text-muted-foreground">
                {m.dashboardTitle}
              </p>
              <Button size="xs">{m.addProduct}</Button>
            </div>
            <div className="p-5">
              <div className="mb-4 grid grid-cols-3 gap-3">
                {m.metrics.map((metric) => (
                  <div
                    key={metric.k}
                    className="rounded-xl border border-border bg-background p-3"
                  >
                    <p className="text-lg font-semibold text-foreground">
                      {metric.v}
                    </p>
                    <p className="text-xs text-muted-foreground">{metric.k}</p>
                  </div>
                ))}
              </div>
              <div className="overflow-hidden rounded-xl border border-border">
                {m.products.map((r, i) => {
                  const live = i !== m.products.length - 1
                  return (
                    <div
                      key={r.name}
                      className={`flex items-center justify-between px-4 py-3 text-sm ${
                        i !== m.products.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <div>
                        <p className="font-medium text-foreground">{r.name}</p>
                        <p className="text-xs text-muted-foreground">{r.cat}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-foreground">
                          {r.price}
                        </span>
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                            live
                              ? "bg-primary/10 text-primary"
                              : "bg-accent/20 text-accent-foreground"
                          }`}
                        >
                          {live ? m.statusLive : m.statusDraft}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* copy */}
        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            {m.eyebrow}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {m.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {m.desc}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {m.capabilities.map((label, i) => {
              const Icon = capIcons[i]
              return (
                <div key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4" />
                  </span>
                  <p className="text-sm font-medium text-foreground">{label}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="h-auto px-5 py-2.5"
              render={<a href="#cta" />}
            >
              {m.openShop}
            </Button>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Check className="size-4 text-primary" /> {m.noFees}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
