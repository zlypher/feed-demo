import type { Metadata } from "next";
import "./globals.css";
import { BottomNavigation } from "@/components/bottom-navigation";
import { defaultMetadata } from "@/utils/metadata";

export const metadata: Metadata = defaultMetadata;

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
