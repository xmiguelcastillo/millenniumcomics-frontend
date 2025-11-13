import { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import ModelDisplay from "../components/HomePage/ModelDisplay.jsx";
import TableRecommend from "../components/HomePage/TableRecommend.jsx";
import {supabase} from "../lib/supabase.js";
function Comic() {
    const {character,title, issue }=  useParams();
    const [comic, setComic] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(character,title,issue);

    useEffect(() => {
        const fetchComic = async () => {
            const { data, error } = await supabase
                .from("comic")
                .select("*")
                .eq("title", title)
                .eq("series_issue", Number(issue))
                .single();

            console.log("Supabase data:", data);
            console.log("Supabase error:", error);

            setComic(data);
            setLoading(false);
        };

        fetchComic();
    }, [title, issue]);


    if (loading) return <div className="text-white text-center">Loading</div>;
    if (!comic) return <div className="text-white">Comic not found.</div>;

    return (

        <div className="flex flex-col items-center justify-center w-full max-w-[1100px] mx-auto mt-10 px-4">

            <div className="flex flex-col md:flex-row w-full items-center justify-center h-full gap-6">

                <div className="flex items-center justify-center
                        w-[70%] md:w-1/3
                        h-[380px] md:h-[520px]
                        border border-[#295150] rounded-[10px]">

                    <div className="w-[70%] h-[70%] md:w-[75%] md:h-[75%]">
                        <img
                            src={comic.cover}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                </div>

                <div className="flex flex-col
                        w-full md:w-2/3
                        p-5
                        h-auto md:h-[520px]">
                    <h1 className="text-2xl md:text-4xl  mb-3">
                        {comic.title} #{comic.series_issue}
                    </h1>

                    <h1 className="text-md md:text-xl font-light">
                        {comic.summary}
                    </h1>

                    <div className="border-b my-3"></div>

                    <div className="flex flex-col gap-3 text-white text-sm md:text-base">

                        <div className="flex justify-between">
                            <span className="font-semibold">Title</span>
                            <span>{comic.title}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-semibold">Publisher</span>
                            <span>{comic.publisher}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-semibold">Character</span>
                            <span>{comic.character}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-semibold">Author</span>
                            <span>{comic.author}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-semibold">Series Issue</span>
                            <span>{comic.series_issue}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-semibold">Year Started</span>
                            <span>{comic.series_year_start}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-semibold">Year Ended</span>
                            <span>{comic.series_year_end}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-semibold">Total Issues</span>
                            <span>{comic.total_issues}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-semibold">Release Date</span>
                            <span>{comic.release_date}</span>
                        </div>

                    </div>
                </div>

            </div>

            <TableRecommend />
        </div>
    );
}

export default Comic;