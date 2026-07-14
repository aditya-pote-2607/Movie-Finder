import Button from "../Button/Button"
import Search from "../search/Search"
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";



function Header() {
    const navigate = useNavigate();
    function HandleSearch(e) {
        const name = e.target.value;
        navigate(`/movie?name=${encodeURIComponent(name)}`);
    }
    return (
        <nav className="bg-gray-900 text-white p-3 flex justify-between">
            <h1 className="text-3xl tracking-[2px] first-letter:text-red-500 first-letter:text-4xl first-letter:font-mono">Movie Finder</h1>
            <Search placeholder={"search Movie..."} onSearch={HandleSearch} />
            <div >
                <Button>  Profile</Button>
                <Button>Watchlist</Button>
            </div>
        </nav>
    )
}

export default Header
