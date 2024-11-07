import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { defaultMetadata } from "@/utils/metadata";
import { ReactQueryClientProvider } from "@/components/react-query-client-provider";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="de">
        <body className="bg-gray-200 h-screen flex flex-col">
          {children}
          <Navigation />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
