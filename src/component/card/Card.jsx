import React from "react";

function Card({ poster, title, year }) {
    return (
        <div className="h-[43vh] w-[15vw] bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            
            <div className="h-[30vh] w-full">
                <img
                    src={poster}
                    alt={title}
                    className="w-full h-full object-cover object-center"
                />
            </div>

            <div className="p-4">
                <h2 className="text-xl font-semibold text-white truncate">
                    {title}
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                    {year}
                </p>
            </div>
        </div>
    );
}

export default Card;