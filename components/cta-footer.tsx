"use client"

import { Glasses, ArrowRight, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

export function CtaFooter() {
  const { t, toggle } = useLanguage()

  return (
    <>
      <section id="cta" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 -top-10 size-64 rounded-full bg-accent/30 blur-3xl"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/80">
              {t.cta.desc}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="h-auto px-6 py-3 text-base"
                render={<a href="#" />}
              >
                {t.cta.createBtn}
                <ArrowRight className="size-4 rtl:rotate-180" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="h-auto px-6 py-3 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                render={<a href="#merchants" />}
              >
                {t.cta.listBtn}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_2fr]">
            <div>
              <a href="#" className="flex items-center gap-2">
                <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Glasses className="size-5" />
                </span>
                <span className="text-lg font-semibold tracking-tight text-foreground">
                  Nazarat<span className="text-primary">JO</span>
                </span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {t.footer.tagline}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {t.footer.cols.map((col) => (
                <div key={col.title}>
                  <h3 className="text-sm font-semibold text-foreground">
                    {col.title}
                  </h3>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a
                          href="#"
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} NazaratJO. {t.footer.rights}
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                {t.footer.privacy}
              </a>
              <a href="#" className="hover:text-foreground">
                {t.footer.terms}
              </a>
              <button
                type="button"
                onClick={toggle}
                className="inline-flex items-center gap-1.5 hover:text-foreground"
                aria-label="Switch language"
              >
                <Languages className="size-4" />
                {t.header.toggle}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
