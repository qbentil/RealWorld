import React from 'react';
import { BiError } from 'react-icons/bi';

interface ErrorComponentProps {
    message: string;
    onRetry: () => void;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message, onRetry }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full py-10 w-full">
            <BiError className="text-red-500 text-6xl mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Something went wrong</h2>
            <p className="text-gray-500 mb-6">{message}</p>
            <button
                onClick={onRetry}
                className="bg-primary-500 text-white px-4 py-2 rounded-lg shadow hover:bg-primary-600 transition duration-200"
            >
                Retry
            </button>
        </div>
    );
};

export default ErrorComponent;
