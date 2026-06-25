"use client"

import Image from "next/image"
import { Eye, Sun, Contact, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const icons = [Eye, Sun, Contact]

export function DiscoverSection() {
  const { t } = useLanguage()

  return (
    <section id="discover" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-3xl border border-border shadow-lg">
          <Image
            src="/optics-shop.png"
            alt={t.discover.title}
            width={760}
            height={620}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t.discover.eyebrow}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.discover.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.discover.desc}
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {t.discover.categories.map((c, i) => {
              const Icon = icons[i]
              return (
                <a
                  key={c.name}
                  href="#"
                  className="group flex items-center justify-between rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{c.name}</p>
                      <p className="text-sm text-muted-foreground">{c.count}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-primary rtl:-scale-x-100" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
