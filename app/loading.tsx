
const Loading = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-white">
            <div className="flex flex-col items-center space-y-4">
                {/* Spinner */}
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

                {/* Text */}
                <p className="text-lg font-semibold text-gray-700">Loading, please wait...</p>
            </div>
        </div>
    );
};

export default Loading;
