import type { Metadata } from "next";
import localFont from "next/font/local";
import "../public/styles/globals.css";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import { ThemeProvider } from "@/components/site/theme-provider";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Svalinn",
  description: "Get The Help You Need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />

            {children}

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
