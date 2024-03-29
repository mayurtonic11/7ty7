import type { Metadata } from "next";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import "./globals.css";
import "./bootstrap.min.css";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
