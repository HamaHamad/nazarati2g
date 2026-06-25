"use client"

import { useState } from "react"
import { Glasses, Menu, X, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { t, toggle } = useLanguage()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Glasses className="size-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Nazarat<span className="text-primary">JO</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {t.header.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="outline"
            size="sm"
            onClick={toggle}
            aria-label="Switch language"
          >
            <Languages className="size-4" />
            {t.header.toggle}
          </Button>
          <Button variant="ghost" size="lg" render={<a href="#" />}>
            {t.header.login}
          </Button>
          <Button size="lg" render={<a href="#cta" />}>
            {t.header.join}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="outline"
            size="sm"
            onClick={toggle}
            aria-label="Switch language"
          >
            <Languages className="size-4" />
            {t.header.toggle}
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-lg text-foreground"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {t.header.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button variant="outline" render={<a href="#" />}>
                {t.header.login}
              </Button>
              <Button render={<a href="#cta" />}>{t.header.join}</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
