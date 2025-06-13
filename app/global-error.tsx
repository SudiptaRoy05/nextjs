'use client'; // Required for error components

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error('Global error caught:', error);
    }, [error]);

    return (
        <html>
            <body className="h-screen flex items-center justify-center bg-red-50 text-center px-4">
                <div className="max-w-md bg-white p-8 rounded-lg shadow-lg border border-red-300">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
                    <p className="text-gray-700 mb-6">{error.message || 'Unexpected error occurred.'}</p>
                    <button
                        onClick={() => reset()}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded"
                    >
                        Try Again
                    </button>
                </div>
            </body>
        </html>
    );
}
