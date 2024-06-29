import AuthWrapper from "@/components/authwrapper";
import React from 'react';
import { RulerPen } from "iconsax-react";

const SkeletonText = ({ width }: { width: string }) => (
    <div className={`h-4 bg-gray-300 rounded ${width}`} />
);

const SkeletonCircle = ({ size }: { size: string }) => (
    <div className={`bg-gray-300 rounded-full ${size}`} />
);

const SkeletonArticleForm = () => (
    <div className="w-[80%] flex flex-col gap-y-4 py-5 items-center justify-center">
        <SkeletonText width="w-1/2" />
        <SkeletonText width="w-1/3" />
        <SkeletonText width="w-full" />
        <SkeletonText width="w-full" />
        <SkeletonText width="w-full" />
    </div>
);

const CreateArticleLoader = () => (
    <div className='w-screen flex flex-col items-center justify-center'>
        <div className='w-screen flex flex-col gap-y-4 py-5 items-center justify-center px-4'>
            <SkeletonCircle size="w-16 h-16" />
            <SkeletonText width="w-1/2" />
            <SkeletonText width="w-1/3" />
        </div>
        <div className='w-[80%] flex items-center justify-center py-2'>
            <div
                className={`flex items-center justify-center text-xs md:text-sm font-semibold text-gray-500 mr-4 p-2 gap-x-2 m-0 border-b-2 border-transparent 
            border-secondary-600 border-b-primary-600 `}
            >
                <RulerPen variant="TwoTone" className="hidden md:block" />
                <SkeletonText width="w-20" />
            </div>
        </div>
        <div className='w-[80%] flex items-center justify-center'>
            <SkeletonArticleForm />
        </div>
    </div>
);

export default CreateArticleLoader;
