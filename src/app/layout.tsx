import "@mantine/core/styles.css";
import type { Metadata } from "next";
import "../styles/globals.css";
import { AppProviders } from "./providers";
import { HeaderMegaMenu } from "@/components/layout/HeaderMegaMenu";
import { FooterLinks } from "@/components/layout/FooterLinks";


export const metadata: Metadata = {
  title: "Sample Org Name – Official Website",
  description: "Sample description for organization website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          <HeaderMegaMenu />
          <main>{children}</main>
          <FooterLinks />
        </AppProviders>
      </body>
    </html>
  );
}
