import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MetricsDash — Investor-Ready Dashboards for Startups",
  description: "Connect Stripe, Google Analytics, and your database to auto-generate professional startup metrics dashboards for investor updates."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a0ada503-08ec-44f7-af6a-fbe226d985ea"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
