import React from 'react';

const tags = ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6"]


const Tags = ({ setTag }: { setTag: (tag: string) => void }) => {
    return (
        <div className='w-full md:w-[25%] bg-gray-200 p-4'>
            <h2 className='text-lg font-bold mb-2'>
                Popular Tags
            </h2>
            <div className='flex flex-wrap gap-2'>
                {
                    tags.map((tag, index) => (
                        <div
                            key={index}
                            onClick={() => setTag(tag)}
                            className='bg-gray-300 text-gray-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-primary-600 hover:text-white'>
                            {tag}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Tags;
