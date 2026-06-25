"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Star, MapPin, ShieldCheck, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import { customerProducts, type Category } from "@/lib/catalog-data"

type Filter = "all" | Category

export function MarketplaceSection() {
  const { t } = useLanguage()
  const m = t.marketplace
  const [filter, setFilter] = useState<Filter>("all")

  const visible = useMemo(
    () => customerProducts.filter((p) => filter === "all" || p.category === filter),
    [filter],
  )

  return (
    <section
      id="marketplace"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          {m.eyebrow}
        </span>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {m.title}
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">{m.desc}</p>
      </div>

      {/* Filter chips */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {(["all", "eyeglasses", "sunglasses", "contacts"] as Filter[]).map(
          (f) => {
            const active = filter === f
            const label =
              f === "all" ? m.filters.all : m.categories[f as Category]
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {label}
              </button>
            )
          },
        )}
      </div>

      {/* Product grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((p) => {
          const Icon = p.icon
          const Deco = p.deco
          const product = m.products[p.key as keyof typeof m.products]
          const categoryLabel = m.categories[p.category]
          const toneLabel =
            p.contactTone != null
              ? m.contactTones[p.contactTone]
              : undefined
          const badgeLabel =
            p.badge != null ? m.badges[p.badge] : undefined

          return (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              {/* Visual */}
              <div
                className="relative flex aspect-[5/4] items-center justify-center overflow-hidden"
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
                        className="absolute -end-4 -bottom-4 size-32 text-foreground/10"
                        strokeWidth={1}
                      />
                    ) : null}
                    <Icon
                      aria-hidden="true"
                      className="relative size-20 text-foreground/85 drop-shadow-sm transition-transform group-hover:scale-105"
                      strokeWidth={1.5}
                    />
                  </>
                )}

                {/* Category badge */}
                <span className="absolute top-3 start-3 inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur">
                  {categoryLabel}
                  {toneLabel ? (
                    <span className="text-muted-foreground">
                      · {toneLabel}
                    </span>
                  ) : null}
                </span>

                {/* Optional product badge */}
                {badgeLabel ? (
                  <span className="absolute top-3 end-3 rounded-full bg-foreground px-2.5 py-1 text-xs font-semibold text-background">
                    {badgeLabel}
                  </span>
                ) : null}

                {/* Rating */}
                <span className="absolute bottom-3 start-3 inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur">
                  <Star className="size-3 fill-accent text-accent" />
                  {p.rating.toFixed(1)}
                </span>
              </div>

              {/* Meta */}
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {product.brand}
                  </p>
                  <h3 className="mt-1 text-base font-semibold leading-snug text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {product.specs}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">
                      {m.verified}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
                      <ShieldCheck className="size-3.5 text-primary" />
                      {product.shop}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="size-3" />
                      {product.city}
                    </span>
                  </div>
                  <div className="text-end">
                    <p className="text-lg font-semibold text-foreground">
                      {p.price} <span className="text-xs font-medium text-muted-foreground">JOD</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    className="h-auto flex-1 py-2"
                    render={
                      <a href="#" aria-label={m.addToCart} />
                    }
                  >
                    <ShoppingBag className="size-3.5" />
                    {m.addToCart}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-auto py-2"
                    render={<a href="#" aria-label={m.viewShop} />}
                  >
                    {m.viewShop}
                  </Button>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <Button
          size="lg"
          variant="outline"
          className="h-auto px-5 py-2.5"
          render={<a href="#discover" />}
        >
          {m.showMore}
        </Button>
      </div>
    </section>
  )
}