"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import {
  Lock,
  Package,
  Boxes,
  TrendingUp,
  ArrowRight,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import { wholesaleProducts, type Category } from "@/lib/catalog-data"

type Filter = "all" | Category

export function WholesaleCatalogSection() {
  const { t } = useLanguage()
  const w = t.wholesaleCatalog
  const [filter, setFilter] = useState<Filter>("all")

  const visible = useMemo(
    () =>
      wholesaleProducts.filter(
        (p) => filter === "all" || p.category === filter,
      ),
    [filter],
  )

  // Tier-step prices: smallest qty → biggest discount.
  // Step 1 = MOQ at full price; step N = bulk tier at reduced price.
  const tierPrice = (
    unit: number,
    moq: number,
    tier: number,
    totalTiers: number,
  ) => {
    const ratio = 1 - (tier / totalTiers) * 0.18 // up to 18% off
    return Math.round(unit * ratio * 100) / 100
  }

  return (
    <section
      id="wholesale-catalog"
      className="relative overflow-hidden border-y border-border bg-foreground text-background"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 size-96 rounded-full bg-primary/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Heading */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-3 py-1 text-xs font-medium text-background/80 backdrop-blur">
              <Lock className="size-3" /> {w.lockBadge}
            </span>
            <span className="mt-4 block text-sm font-semibold uppercase tracking-wider text-accent">
              {w.eyebrow}
            </span>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {w.title}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-background/75">
              {w.desc}
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-background/15 bg-background/5 p-3 text-xs text-background/75 backdrop-blur sm:max-w-xs">
            <Lock className="mt-0.5 size-4 shrink-0 text-accent" />
            <p>{w.applyNotice}</p>
          </div>
        </div>

        {/* Filter chips */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {(["all", "eyeglasses", "sunglasses", "contacts"] as Filter[]).map(
            (f) => {
              const active = filter === f
              const label =
                f === "all"
                  ? t.merchant.addProduct.replace("+ ", "") === "Add product"
                    ? "All"
                    : "الكل"
                  : w.categories[f as Category]
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-background/20 bg-background/5 text-background hover:border-accent hover:text-accent"
                  }`}
                >
                  {label}
                </button>
              )
            },
          )}
        </div>

        {/* Wholesale grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => {
            const Icon = p.icon
            const Deco = p.deco
            const product = w.products[p.key as keyof typeof w.products]
            const categoryLabel = w.categories[p.category]
            const toneLabel =
              p.contactTone != null
                ? w.contactTones[p.contactTone]
                : undefined
            const unitLabel =
              p.category === "contacts" ? w.unitBox : w.unitPiece

            return (
              <article
                key={p.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-background/15 bg-background/5 backdrop-blur transition-colors hover:border-accent/60"
              >
                {/* Visual */}
                <div
                  className="relative flex aspect-[16/9] items-center justify-center overflow-hidden"
                  style={{
                    backgroundImage: p.imageUrl ? 'none' : `linear-gradient(135deg, ${p.accent.from}, ${p.accent.to})`,
                    backgroundColor: p.imageUrl ? '#fff' : 'transparent',
                  }}
                >
                  {p.imageUrl ? (
                    <Image src={p.imageUrl} alt={product.name} fill referrerPolicy="no-referrer" className="object-cover transition-transform group-hover:scale-105" />
                  ) : (
                    <>
                      {Deco ? (
                        <Deco
                          aria-hidden="true"
                          className="absolute -end-3 -bottom-3 size-24 text-foreground/15"
                          strokeWidth={1}
                        />
                      ) : null}
                      <Icon
                        aria-hidden="true"
                        className="relative size-16 text-foreground/85 drop-shadow-sm transition-transform group-hover:scale-105"
                        strokeWidth={1.5}
                      />
                    </>
                  )}

                  <span className="absolute top-3 start-3 inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur">
                    <Boxes className="size-3" />
                    {categoryLabel}
                    {toneLabel ? (
                      <span className="text-muted-foreground">
                        · {toneLabel}
                      </span>
                    ) : null}
                  </span>

                  <span className="absolute top-3 end-3 inline-flex items-center gap-1 rounded-full bg-foreground px-2.5 py-1 text-xs font-semibold text-background">
                    <Package className="size-3" />
                    BULK
                  </span>
                </div>

                {/* Meta */}
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-background/60">
                      {w.supplier}
                    </p>
                    <h3 className="mt-1 text-base font-semibold leading-snug text-background">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs text-background/65">
                      {product.supplier} · {product.specs}
                    </p>
                  </div>

                  {/* Price tiers */}
                  <div className="rounded-xl border border-background/10 bg-background/5 p-3">
                    <div className="flex items-center justify-between text-xs text-background/70">
                      <span className="inline-flex items-center gap-1">
                        <Layers className="size-3" />
                        {w.tiersLabel}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <TrendingUp className="size-3 text-accent" />
                        {p.tiers}
                      </span>
                    </div>
                    <ul className="mt-2 flex flex-col gap-1.5">
                      {Array.from({ length: p.tiers }).map((_, i) => {
                        const tier = i + 1
                        const qty = p.moq * tier
                        const price = tierPrice(
                          p.unitPrice,
                          p.moq,
                          tier,
                          p.tiers,
                        )
                        return (
                          <li
                            key={tier}
                            className="flex items-center justify-between text-xs"
                          >
                            <span className="text-background/70">
                              ≥ {qty} {p.category === "contacts" ? w.unitBox : w.unitPiece}
                            </span>
                            <span
                              className={`font-semibold ${
                                i === p.tiers - 1
                                  ? "text-accent"
                                  : "text-background"
                              }`}
                            >
                              {price} JOD
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>

                  {/* MOQ + Stock */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg border border-background/10 bg-background/5 p-2.5">
                      <p className="text-background/60">{w.moqLabel}</p>
                      <p className="mt-0.5 font-semibold text-background">
                        {p.moq}{" "}
                        <span className="text-xs font-normal text-background/60">
                          {unitLabel}
                        </span>
                      </p>
                    </div>
                    <div className="rounded-lg border border-background/10 bg-background/5 p-2.5">
                      <p className="text-background/60">{w.stockLabel}</p>
                      <p className="mt-0.5 font-semibold text-background">
                        {p.stock.toLocaleString()}{" "}
                        <span className="text-xs font-normal text-background/60">
                          {unitLabel}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    size="sm"
                    variant="secondary"
                    className="mt-1 h-auto w-full justify-center py-2"
                    render={<a href="#wholesalers" />}
                  >
                    {w.requestQuote}
                    <ArrowRight className="size-3.5 rtl:rotate-180" />
                  </Button>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-background/15 bg-background/5 p-6 backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Lock className="size-4" />
            </span>
            <div>
              <p className="font-semibold text-background">
                {t.wholesaler.title}
              </p>
              <p className="text-xs text-background/65">
                {w.applyNotice}
              </p>
            </div>
          </div>
          <Button
            size="lg"
            variant="secondary"
            className="h-auto px-5 py-2.5"
            render={<a href="#cta" />}
          >
            {t.wholesaler.applyBtn}
          </Button>
        </div>
      </div>
    </section>
  )
}