import Header from "../component/header/Header"
import Footer from "../component/footer/Footer"
import { useEffect, useState } from "react";
import SearchOutput from "../component/searchOutput/SearchOutput";
import { useSearchParams } from "react-router-dom";

function SearchPage() {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const [data, setData] = useState(null);
    useEffect(() => {
        if (!name) return;
        async function getData() {
            try {
                const response = await fetch(
                    `https://www.omdbapi.com/?apikey=e66f554f&t=${encodeURIComponent(name)}`
                );
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, [name]);


    return (
        <>
            <Header />
            <SearchOutput data={data} />
            <Footer />
        </>
    )
}

export default SearchPage
