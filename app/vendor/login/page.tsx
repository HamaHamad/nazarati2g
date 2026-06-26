"use client";

import { Glasses, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export default function VendorLoginPage() {
  const { t } = useLanguage();
  const v = t.vendorAuth;

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
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
            {v.loginTitle}
          </h1>
          <p className="mt-2 text-muted-foreground">{v.loginDesc}</p>
        </div>

        <div className="bg-background rounded-2xl border border-border shadow-sm p-6 sm:p-8">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-medium">{v.email}</label>
              <input
                type="email"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">{v.password}</label>
                {/* <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a> */}
              </div>
              <input
                type="password"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="pt-2">
              <Button className="w-full" size="lg" type="submit">
                {v.signIn}
              </Button>
            </div>
          </form>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          {v.noAccount}{" "}
          <a
            href="/vendor/register"
            className="font-semibold text-primary hover:underline"
          >
            {v.signUp}
          </a>
        </p>
      </div>
    </div>
  );
}
