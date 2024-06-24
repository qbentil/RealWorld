import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* sidebar with 30% */}
      <div className="flex h-full w-full">
        <div className="w-1/6 h-full">
          <Sidebar />
        </div>
        {/* main content with 70% */}
        <div className="w-5/6 bg-white">
          <header className="h-16 w-full shadow-md">
            <Navbar />
          </header>
          <main className="p-4">{children}</main>
        </div>
      </div>
      {children}
    </>

  );
}
