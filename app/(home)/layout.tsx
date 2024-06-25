
import Footer from "@/components/footer";
import DefNavbar from "@/components/nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conduit Feeds",
  description: "Conduit feeds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    < >
      <DefNavbar />
      {children}
      <Footer />
    </>
  );
}
