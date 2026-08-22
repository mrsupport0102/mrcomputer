"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GOOGLE_ADS_ID = "AW-18404835407";
const CONSENT_KEY = "mrcomputer-cookie-consent";

type ConsentChoice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function updateConsent(choice: ConsentChoice) {
  window.gtag?.("consent", "update", {
    ad_storage: choice,
    analytics_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
  });
}

export function GoogleAdsTracking() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const savedChoice = window.localStorage.getItem(CONSENT_KEY) as ConsentChoice | null;

    if (savedChoice) {
      updateConsent(savedChoice);
    } else {
      const timer = window.setTimeout(() => setShowConsent(true), 0);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const chooseConsent = (choice: ConsentChoice) => {
    window.localStorage.setItem(CONSENT_KEY, choice);
    updateConsent(choice);
    setShowConsent(false);
  };

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){dataLayer.push(arguments);};
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>

      {showConsent && (
        <aside
          aria-label="Cookieindstillinger"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-2xl border border-white/10 bg-navy p-5 text-white shadow-2xl md:flex md:items-center md:gap-6"
        >
          <div className="flex-1">
            <p className="font-semibold">Må vi måle, hvad der virker?</p>
            <p className="mt-1 text-sm leading-relaxed text-white/75">
              Vi bruger valgfrie cookies til at måle annoncer og forbedre webshoppen. Du kan
              altid fortsætte uden.
            </p>
          </div>
          <div className="mt-4 flex shrink-0 gap-3 md:mt-0">
            <button
              type="button"
              onClick={() => chooseConsent("denied")}
              className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/10"
            >
              Kun nødvendige
            </button>
            <button
              type="button"
              onClick={() => chooseConsent("granted")}
              className="rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-navy hover:brightness-105"
            >
              Accepter
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
