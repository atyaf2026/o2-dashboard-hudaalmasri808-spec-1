import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { DashboardLayout } from "@/src/components/layout/DashboardLayout";
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "O2 Dashboard Training",
  description: "Training dashboard for O2",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} h-full antialiased`}>
      <body className="min-h-full">
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
