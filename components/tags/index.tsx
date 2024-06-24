import React from 'react';

const Tags = () => {
    return (
        <div className='w-full md:w-[20%] bg-gray-100 p-4'>
            <h2 className='text-lg font-bold mb-2'>
                Popular Tags
            </h2>
            <div className='flex flex-wrap gap-2'>
                <p className="text-primary-500 font-bold rounded-full px-3 py-1 border-primary-300 border hover:bg-primary-500 hover:text-white cursor-pointer">Tag 1</p>
                <p className="text-primary-500 font-bold rounded-full px-3 py-1 border-primary-300 border hover:bg-primary-500 hover:text-white cursor-pointer">Tag 2</p>
                <p className="text-primary-500 font-bold rounded-full px-3 py-1 border-primary-300 border hover:bg-primary-500 hover:text-white cursor-pointer">Tag 3</p>
                <p className="text-primary-500 font-bold rounded-full px-3 py-1 border-primary-300 border hover:bg-primary-500 hover:text-white cursor-pointer">Tag 4</p>
                <p className="text-primary-500 font-bold rounded-full px-3 py-1 border-primary-300 border hover:bg-primary-500 hover:text-white cursor-pointer">Tag 5</p>
                <p className="text-primary-500 font-bold rounded-full px-3 py-1 border-primary-300 border hover:bg-primary-500 hover:text-white cursor-pointer">Tag 6</p>
            </div>
        </div>
    );
}

export default Tags;
