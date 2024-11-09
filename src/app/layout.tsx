import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/common/navigation";
import { defaultMetadata } from "@/utils/metadata";
import { ReactQueryClientProvider } from "@/components/common/react-query-client-provider";
import { JsonLdOrganisation } from "@/components/json-ld/organisation";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="de">
        <body className="bg-gray-200 pb-16 min-h-screen flex flex-col">
          {children}
          <Navigation />
          <JsonLdOrganisation />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
