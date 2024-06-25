
import Footer from "@/components/footer";
import DefNavbar from "@/components/nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <DefNavbar />
      {children}
      <Footer />
    </div>
  );
}
