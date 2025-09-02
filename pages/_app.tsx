import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/clerk-react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing CLERK_PUBLISHABLE_KEY");
  }
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
