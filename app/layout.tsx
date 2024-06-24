import "./globals.css";
import "react-toastify/dist/ReactToastify.min.css";

import DefNavbar from "@/components/nav";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";

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
    <html lang="en">
      <body
        className="text-gray-900 w-screen overflow-x-hidden overflow-y-auto"
      >
        <ToastContainer
          position="top-right"
          className={"app__toast"}
          bodyClassName={"app__toast__body"}
          autoClose={5000}
          hideProgressBar={true}
          closeOnClick={false}
          rtl={false}
          draggable
          pauseOnFocusLoss
          theme="light"
        />
        <DefNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
