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
                    </div>
                </div>
            </div>
        </div>
    );
}
