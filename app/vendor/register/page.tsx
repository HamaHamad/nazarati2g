"use client";

import { useState } from "react";
import {
  Glasses,
  Store,
  Truck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export default function VendorRegisterPage() {
  const { t } = useLanguage();
  const v = t.vendorAuth;

  const [step, setStep] = useState(1);
  const [role, setRole] = useState<"shop" | "wholesaler" | null>(null);

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-xl">
        <div className="text-center mb-8">
          <a href="/" className="inline-flex items-center gap-2 mb-6">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Glasses className="size-6" />
            </span>
            <span className="text-2xl font-semibold tracking-tight text-foreground">
              Nazarat<span className="text-primary">JO</span>
            </span>
          </a>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {step === 4 ? v.successTitle : v.registerTitle}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {step === 4 ? v.successDesc : v.registerDesc}
          </p>
        </div>

        <div className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden">
          {step < 4 && (
            <div className="bg-secondary/30 px-6 py-4 border-b border-border flex items-center justify-between">
              <div className="flex gap-2">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-2 w-12 rounded-full transition-colors ${
                      step >= s ? "bg-primary" : "bg-primary/20"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {step === 1 && v.step1}
                {step === 2 && v.step2}
                {step === 3 && v.step3}
              </span>
            </div>
          )}

          <div className="p-6 sm:p-8">
            {step === 1 && (
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => setRole("shop")}
                  className={`w-full flex items-start gap-4 p-5 rounded-xl border-2 transition-all text-start ${
                    role === "shop"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <span
                    className={`flex size-12 shrink-0 items-center justify-center rounded-lg ${role === "shop" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}
                  >
                    <Store className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{v.roleShop}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {v.roleShopDesc}
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setRole("wholesaler")}
                  className={`w-full flex items-start gap-4 p-5 rounded-xl border-2 transition-all text-start ${
                    role === "wholesaler"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <span
                    className={`flex size-12 shrink-0 items-center justify-center rounded-lg ${role === "wholesaler" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}
                  >
                    <Truck className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {v.roleWholesaler}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {v.roleWholesalerDesc}
                    </p>
                  </div>
                </button>

                <div className="mt-8">
                  <Button
                    className="w-full"
                    size="lg"
                    disabled={!role}
                    onClick={handleNext}
                  >
                    {v.next}
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{v.name}</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{v.email}</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{v.password}</label>
                  <input
                    type="password"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{v.phone}</label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleBack}
                    className="w-24"
                  >
                    {v.back}
                  </Button>
                  <Button className="flex-1" size="lg" onClick={handleNext}>
                    {v.next}
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {v.businessName}
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{v.crNumber}</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{v.address}</label>
                  <textarea
                    rows={3}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleBack}
                    className="w-24"
                  >
                    {v.back}
                  </Button>
                  <Button className="flex-1" size="lg" onClick={handleNext}>
                    {v.submit}
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-8">
                <div className="inline-flex size-20 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
                  <CheckCircle2 className="size-10" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">
                  {v.successTitle}
                </h3>
                <p className="text-muted-foreground mb-8">{v.successDesc}</p>

                <Button size="lg" render={<a href="/" />}>
                  {v.backToHome}
                </Button>
              </div>
            )}
          </div>
        </div>

        {step < 4 && (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            {v.haveAccount}{" "}
            <a
              href="/vendor/login"
              className="font-semibold text-primary hover:underline"
            >
              {v.signIn}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
