import Header from "../component/header/Header"
import Footer from "../component/footer/Footer"
import Button from "../component/Button/Button"
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

function SearchPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(
                    "https://www.omdbapi.com/?apikey=e66f554f&t=due"
                );
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error(error);
            }
        }

        getData();
    }, []);
console.log(data);


    return (
        <>
            <Header />
            <div className="relative h-[90vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center blur-md scale-110"
                    style={{
                        backgroundImage: `url(${data?.Poster})`,
                    }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 flex rounded-4xl text-white justify-around mt-10 items-center">
                    <div className="flex items-center gap-2 ">
                        <img
                            className="size-70 rounded-md m-2"
                            src={data?.Poster}
                            alt={data?.Title}
                        />
                        <div>
                            <h2 className="text-6xl font-mono">{data?.Title}</h2>

                            <p className="m-3">
                                Genre: <span className="text-blue-300">{data?.Genre}</span>
                            </p>
                            <span className="bg-red-600 rounded-xl p-1 m-3">
                                IMDB: {data?.imdbRating}/10
                            </span>
                            <br />
                            <Button css="border rounded-4xl m-2">
                                Add To Watchlist
                            </Button>

                            <Button css="p-2 rounded-4xl text-black m-2 bg-green-700">
                                <span className="flex items-center gap-1">
                                    <FaPlay /> Watch Trailer
                                </span>
                            </Button>
                        </div>

                    </div>
                    <div className="">
                        <details name="faq-group">
                            <summary>Starcast</summary>
                            <p>{data?.Actors}</p>
                        </details>

                        <details name="faq-group">
                            <summary>Description</summary>
                            <p>{data?.Plot}</p>
                        </details>

                        <details name="faq-group">
                            <summary>Language</summary>
                            <p>{data?.Language}</p>
                        </details>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SearchPage
