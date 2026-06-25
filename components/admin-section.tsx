"use client"

import { ShieldCheck, UserCheck, SlidersHorizontal, Flag, Settings2 } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const icons = [UserCheck, SlidersHorizontal, Flag, Settings2]

export function AdminSection() {
  const { t } = useLanguage()
  const a = t.admin

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="rounded-3xl border border-border bg-secondary/40 p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <ShieldCheck className="size-3.5" /> {a.badge}
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {a.title}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {a.desc}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {a.controls.map((c, i) => {
              const Icon = icons[i]
              return (
                <div
                  key={c.title}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {c.desc}
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
