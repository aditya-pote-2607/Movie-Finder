

export default function Loading() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
            {/* Spinner */}
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

            {/* Loading Text */}
            <h2 className="mt-6 text-2xl font-semibold text-gray-800">
                Loading...
            </h2>

            <p className="mt-2 text-gray-500">
                Searching for your movie...
            </p>
        </div>
    );
}