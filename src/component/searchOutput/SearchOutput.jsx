import { FaPlay } from "react-icons/fa";
import Button from "../Button/Button";
import NotFound from "../../pages/NotFound";
import Loading from "../loading/Loading";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist } from "../../features/watchlist/watchlistSlice";

function SearchOutput({ data, name, loading }) {
    const navigate = useNavigate()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const dispatch = useDispatch()
    function HandleWatchTrailer() {
        window.open(`https://www.youtube.com/results?search_query=${name} movie trailer`, "_blank");
    }

    function HandleWatchList() {
        if (!isLoggedIn) {
            navigate("/login")
        } else {
            const movieName = data.Title;
            dispatch(addToWatchlist({ data, movieName }))
        }

    }
    if (loading) {
        return <Loading />;
    }
    if (data === undefined) {
        return null;
    }
    if (data.Response === "False") {
        return <NotFound movieName={name} />;
    }
    return (
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
                        <Button clickHandle={HandleWatchList} css="border rounded-4xl m-2">
                            Add To Watchlist
                        </Button>

                        <Button clickHandle={HandleWatchTrailer} css="p-2 rounded-4xl text-black m-2 bg-green-700">
                            <span className="flex items-center gap-1">
                                <FaPlay /> Watch Trailer
                            </span>
                        </Button>
                    </div>

                </div>
                <div className="">
                    <details name="faq-group">
                        <summary className="cursor-pointer font-semibold">Starcast</summary>
                        <p className="mt-2 text-gray-200">{data?.Actors}</p>
                    </details>

                    <details name="faq-group">
                        <summary className="cursor-pointer font-semibold">Description</summary>
                        <p className="mt-2 text-gray-200">{data?.Plot}</p>
                    </details>

                    <details name="faq-group">
                        <summary className="cursor-pointer font-semibold">Language</summary>
                        <p className="mt-2 text-gray-200">{data?.Language}</p>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default SearchOutput
