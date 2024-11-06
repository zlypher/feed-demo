import type { Metadata } from "next";
import "./globals.css";
import { BottomNavigation } from "@/components/bottom-navigation";

export const metadata: Metadata = {
  title: "Feed Demo",
  description:
    "This is a simple feed demo project. It include a feed of different articles and detail pages for individual articles.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <div className="bg-slate-100 h-screen flex flex-col">
          {children}
          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
