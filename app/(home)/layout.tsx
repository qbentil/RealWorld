
import Footer from "@/components/footer";
import DefNavbar from "@/components/nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen relative pb-10">
      <DefNavbar />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
}
