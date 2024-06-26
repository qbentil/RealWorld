import "./globals.css";
import "react-toastify/dist/ReactToastify.min.css";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import reducer from "@/context/reducer";
import initialState from "@/context/initialState";
import { StateProvider } from "@/context/StateProvider";

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
        className="text-gray-900 w-screen overflow-x-hidden"
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
        <StateProvider reducer={reducer} initialState={initialState}>
          {children}
        </StateProvider>
      </body>
    </html>
  );
}
