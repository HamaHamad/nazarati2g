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
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";

export default function VendorRegisterPage() {
  const { t } = useLanguage();
  const v = t.vendorAuth;

  const [step, setStep] = useState(1);
  const [role, setRole] = useState<"shop" | "wholesaler" | null>(null);

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // Move to step 3
      setStep(3);
    } catch (error) {
      console.error("Google sign up failed:", error);
    }
  };

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

                <div className="relative mt-4 mb-2">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full" 
                  size="lg" 
                  type="button"
                  onClick={handleGoogleSignIn}
                >
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  {v.googleSignIn}
                </Button>
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
