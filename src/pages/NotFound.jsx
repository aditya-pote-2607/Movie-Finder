import React from 'react'
import { Link } from "react-router-dom";

function NotFound({ movieName }) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
            <div className="text-center">
                <h1 className="text-8xl font-extrabold text-blue-600">404</h1>

                <h2 className="mt-4 text-3xl font-bold text-gray-800">
                    We couldn't find: 

                    <strong> {movieName}</strong>
                </h2>

                <p className="mt-3 text-gray-600 max-w-md">
                    Oops! The page you're looking for doesn't exist or may have been
                    moved.
                </p>

                <div className="mt-8">
                    <Link
                        to="/"
                        className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg transition duration-300 hover:bg-blue-700 hover:shadow-xl"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound
