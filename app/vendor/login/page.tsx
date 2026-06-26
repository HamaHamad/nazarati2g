"use client";

import { Glasses, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";

export default function VendorLoginPage() {
  const { t } = useLanguage();
  const v = t.vendorAuth;

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // Redirect or show success
      window.location.href = "/";
    } catch (error) {
      console.error("Google sign in failed:", error);
    }
  };

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

            <div className="pt-2 flex flex-col gap-3">
              <Button className="w-full" size="lg" type="submit">
                {v.signIn}
              </Button>
              
              <div className="relative">
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
