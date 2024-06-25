import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex h-screen w-screen overflow-hidden">
        {/* Show this div only on screens smaller than 'md' */}
        <div className="flex md:hidden items-center justify-center w-full h-full bg-gray-100">
          <p className="text-lg font-bold text-gray-700">Dashboard is only accessible on larger screens.</p>
        </div>

        {/* Show the main layout only on screens 'md' and larger */}
        <div className="hidden md:flex h-full w-full">
          <div className="w-1/6 h-full">
            <Sidebar />
          </div>
          <div className="w-5/6 bg-white">
            <header className="h-16 w-full shadow-md">
              <Navbar />
            </header>
            <main className="p-4">{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
