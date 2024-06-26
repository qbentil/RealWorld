import React from 'react'

const Footer = () => {
    return (
        <footer className='absolute bottom-0 bg-white w-full flex items-center justify-between px-4 md:px-10 py-2'>
            <div className='text-gray-600'>
                &copy; {new Date().getFullYear()} All rights reserved.
            </div>
            <div className='text-gray-600 flex items-center gap-x-1'>
                Made with <span className='text-red-500'>💖</span> by 
                <a href="https://github.com/qbentil" target="_blank" rel="noopener noreferrer" className='text-primary-500 hover:text-primary-700'>
                    qbentil
                </a>
            </div>
        </footer>
    )
}

export default Footer
