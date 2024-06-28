import React from 'react';

const ArticlePreloader = () => {
    return (
        <>
            {
                Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="w-full md:p-6 py-2 border-b border-gray-200 animate-pulse">
                        <div className="flex items-center mb-4 justify-between">
                            <div className='flex'>
                                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                                <div>
                                    <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
                                    <div className="h-3 bg-gray-300 rounded w-16"></div>
                                </div>
                            </div>
                            <div className="flex items-center mt-4 border border-gray-500 px-3 py-1 rounded-lg bg-gray-300 w-16 h-8"></div>
                        </div>
                        <div className="h-6 bg-gray-300 rounded w-48 mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
                        <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
                        <div className="flex items-center justify-between">
                            <div className="h-4 bg-gray-300 rounded w-24"></div>
                            <div className="h-6 bg-gray-300 rounded w-16"></div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default ArticlePreloader;
