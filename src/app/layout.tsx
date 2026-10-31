import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConnectSphere | Your Skills. Your Opportunities. Your Future.",
  description:
    "ConnectSphere helps students, fresh graduates, job seekers, freelancers, and employers discover career opportunities, develop skills, and build professional networks across Bangladesh and beyond.",
  keywords: [
    "Bangladesh tech jobs",
    "internships Dhaka",
    "fresh graduate opportunities",
    "freelance projects Bangladesh",
    "career navigator",
    "skill development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-teal-500 selection:text-white">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
