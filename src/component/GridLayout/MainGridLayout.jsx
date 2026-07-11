import { useState } from "react";
import Button from "../Button/Button";
import Card from "../card/Card";

function MainGridLayout() {
    const movieData = [
        {
            url: "https://image.tmdb.org/t/p/w1280/3Rfvhy1yN5g4gY4H3yYk6q9s8z.jpg",
            title: "Toy Story"
        },
        {
            url: "https://image.tmdb.org/t/p/w1280/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
            title: "Interstellar"
        },
        {
            url: "https://image.tmdb.org/t/p/w1280/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
            title: "Fight Club"
        },
        {
            url: "https://image.tmdb.org/t/p/w1280/2u7zbn8EudG6kLlBzUYqP8yZ1t.jpg",
            title: "The Lord of the Rings"
        },
        {
            url: "https://image.tmdb.org/t/p/w1280/q3jHCb4dMfYF6ojikKuHdX7Rbo.jpg",
            title: "Avengers"
        },
        {
            url: "https://image.tmdb.org/t/p/w1280/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg",
            title: "Spider-Man"
        },
        {
            url: "https://image.tmdb.org/t/p/w1280/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
            title: "Joker"
        },
        {
            url: "https://image.tmdb.org/t/p/w1280/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
            title: "The Dark Knight"
        },
        {
            url: "https://image.tmdb.org/t/p/w1280/34m2tygAYBGqA9PXN0zD2t8m6R.jpg",
            title: "Avatar"
        },
        {
            url: "https://image.tmdb.org/t/p/w1280/6ELJEzQJ3Y45HczvreC3dg0GV5R.jpg",
            title: "Parasite"
        }
    ]
    const [count, setCount] = useState(0)
  function HandleClick(e) {

    
    if (e.target.innerText === ">") {
        setCount((prev) => {
            if (prev >= movieData.length - 1) {
                return 0; 
            }
            return prev + 1;
        });
    } else {
        setCount((prev) => {   
            if (prev <= 0) {
                return movieData.length - 1; 
            }
            return prev - 1;
        });
    }
}
    return (
        <div className="bg-gray-700 h-[95vh] flex justify-center flex-wrap">
            <div className="h-[45vh] w-[80vw] flex justify-center mt-3 ">
                <Button clickHandle={HandleClick}><span className="text-white text-4xl">&lt;</span></Button>
                <img className="w-full" src={movieData[count].url} alt={movieData[count].title} />
                <Button clickHandle={HandleClick}><span className="text-white text-4xl">&gt;</span></Button>
            </div>
            <div className="flex gap-2.5 justify-evenly w-full">
                <Card
                    poster="https://wallpaperaccess.com/full/9686942.jpg"
                    title="Spider-Man"
                    year={2026}
                />
                <Card
                    poster="https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
                    title="The Shawshank Redemption"
                    year={1994}
                />

                <Card
                    poster="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
                    title="Wonder Woman"
                    year={2017}
                />

                <Card
                    poster="https://image.tmdb.org/t/p/w500/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg"
                    title="Avengers: Endgame"
                    year={2019}
                />

                <Card
                    poster="https://image.tmdb.org/t/p/w500/8QVDXDiOGHRlQuMyyKSL9eMCOx0.jpg"
                    title="Interstellar"
                    year={2014}
                />

                <Card
                    poster="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
                    title="Spider-Man: No Way Home"
                    year={2021}
                />
            </div>
        </div>
    )
}

export default MainGridLayout;