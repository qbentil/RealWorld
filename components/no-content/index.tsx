import React from 'react';
import { BsExclamationCircle } from 'react-icons/bs';

const NoRecordsFound = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full py-10">
            <BsExclamationCircle size="48" className="text-primary-500 mb-4" />
            <h2 className="text-2xl font-bold text-primary-800 mb-2">No Records Found</h2>
            <p className="text-gray-600 text-center">
                {`Sorry, we couldn't find any records matching your criteria.`} <br />
                Try adjusting your search or filter settings.
            </p>
        </div>
    );
};

export default NoRecordsFound;
