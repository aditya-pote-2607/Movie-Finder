import { MdDelete } from "react-icons/md";
import Button from "../../../component/Button/Button";
import { useDispatch } from "react-redux";
import { removeFromWatchlist } from "../watchlistSlice";

function WatchlistItem({ item }) {
    const dispatch = useDispatch();
    function HandleDeleteBtn() {
        dispatch(removeFromWatchlist(item.imdbID))


    }
    return (
        <div className="flex items-center justify-between p-4 bg-gray-700 rounded-xl hover:bg-gray-800 transition duration-200 shadow-md">
            {/* Left: Info */}
            <div className="flex items-center gap-4">
                <img
                    src={item.Poster}
                    alt={item.Title}
                    className="w-12 h-16 rounded-lg object-cover"
                />

                <div>
                    <h3 className="text-white font-medium text-lg">
                        {item.Title}
                    </h3>

                    <p className="text-gray-400 text-sm">
                        {item.Genre} • {item.Year}
                    </p>
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-6">
                <span className="text-yellow-400 font-semibold">
                    ⭐ {item.imdbRating}
                </span>

                <Button clickHandle={HandleDeleteBtn} css="text-gray-400 hover:text-red-500 transition">
                    <MdDelete size={30} />
                </Button>
            </div>
        </div>
    );
}

export default WatchlistItem;