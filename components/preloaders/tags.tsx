import React from 'react';

const TagsPreloader = () => {
    return (
        <>
            {Array.from({ length: 5 }).map((_, index) => (
                <div
                    key={index}
                    className='bg-gray-300 text-gray-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-600 hover:text-white animate-pulse w-20 h-6'>
                </div>
            ))}
        </>
    );
};

export default TagsPreloader;
