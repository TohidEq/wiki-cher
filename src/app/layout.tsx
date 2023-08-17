import "@/styles/index.scss";

import Navigation from "@/components/Navigation";

import type { Metadata } from "next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
