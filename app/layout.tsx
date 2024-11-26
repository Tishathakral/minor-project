import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbarDemo";

export const metadata: Metadata = {
  title: "InQuiro AI",
  description: "Created by Narottam Choudhary & Tisha Thakral",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <Navbar className="sticky top-0 z-50"/>
             {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
