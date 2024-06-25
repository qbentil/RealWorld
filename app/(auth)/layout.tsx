import { Back, Link1 } from "iconsax-react";
import Link from "next/link";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen bg-gray-100">
            <div className="min-h-full flex justify-center items-center relative">
                <div className="flex flex-col z-10 space-y-10">
                    <div className="flex items-center justify-center space-x-2">
                    </div>
                    <div className="flex-col justify-center p-6 sm:p-10 lg:flex-none bg-white/80 backdrop-blur-xl rounded">
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
