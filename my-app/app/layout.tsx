import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Providers from "./providers";
import ThemeProviderWrapper from "./theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "IFCS",
  description: "InFlight Catering Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderWrapper>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
