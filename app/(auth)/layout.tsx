import { Back, Link1 } from "iconsax-react";
import Link from "next/link";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen bg-gray-100">
            <div className="min-h-full w-screen  flex justify-center items-center relative px-5">
                <div className="w-full md:w-1/2 flex flex-col ">
                    <div className="flex justify-center items-center py-2" >
                        <Link1 className="text-primary-600" />
                        <Link href="/" className="text-2xl font-bold ml-2">
                            Conduit
                        </Link>
                    </div>
                    <div className="w-full flex-col justify-center p-6 sm:p-10 lg:flex-none bg-white/80 backdrop-blur-xl rounded">
                        {children}
                        <div className="flex justify-center items-center text-sm text-primary-600 hover:text-primary-500 mt-2">
                            <Back />
                            <Link href="/" className="">
                                To Global Feeds
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
