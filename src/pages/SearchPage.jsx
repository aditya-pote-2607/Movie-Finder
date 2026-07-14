import Header from "../component/header/Header"
import Footer from "../component/footer/Footer"
import { useEffect, useState } from "react";
import SearchOutput from "../component/searchOutput/SearchOutput";
import { useSearchParams } from "react-router-dom";

function SearchPage() {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (!name) return;
        const controller = new AbortController();
        async function getData() {
            setLoading(true)
            const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
            
            try {
                const response = await fetch(
                      `https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(name)}`,
                    {
                        signal: controller.signal,

                    }
                );
                const result = await response.json();
                setData(result);
            } catch (err) {
                setData({ Response: "False" });
            } finally {
                setLoading(false);
            }
        }

        getData();
        return () => controller.abort();

    }, [name]);


    return (
        <>
            <Header />
            <SearchOutput
                data={data}
                name={name}
                loading={loading} />
            <Footer />
        </>
    )
}

export default SearchPage
