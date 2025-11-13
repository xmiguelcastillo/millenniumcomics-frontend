import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { supabase } from "../../lib/supabase.js";
export default function TableDisplay() {
    const [comicTable, setComicTable] = useState([]);

    useEffect(() => {
        const fetchComics = async () => {
            const { data, error } = await supabase
                .from("comic")
                .select("*");
            if (error) {
                console.error("Supabase error:", error);
                return;
            }

            const shuffled = [...data].sort(() => Math.random() - 0.5);
            const limited = shuffled.slice(0, 10);

            setComicTable(limited);
        };

        fetchComics();
    }, []);
    return (
        <div className="flex flex-col items-center justify-center w-[100%] max-w-[1200px] mx-auto mt-1 ">
            <div className="w-full flex justify-center">
                <table className="w-full border-collapse mb-2 border-[#4f4e4e] text-white text-sm ">
                    <thead className="bg-[#0e0f10]">
                    <tr>
                        <th className="px-4 py-2 text-left">Number</th>
                        <th className="px-4 py-2 text-left">Comic</th>
                        <th className="px-4 py-2 text-left">Character</th>
                        <th className="px-4 py-2 text-left">Author</th>
                    </tr>
                    </thead>
                    <tbody className="border border-[#4f4e4e] rounded-xl">
                    {comicTable.map((item, i) => (
                        <tr key={item.id} className="h-24">
                            <td className="pl-10 pb-5">{i + 1}</td>
                            <Link to={`${item.character}/${item.title}/${item.series_issue}`}>
                            <td className="flex flex-row gap-2 items-center">
                                <img src={item.cover} className="w-14 h-18" />
                                <div className="flex flex-col">
                                    <div>{item.title}</div>
                                    <div>{item.publisher} Issue #{item.seriesIssue}</div>
                                </div>
                            </td></Link>

                            <td>
                            <Link to={item.character}>{item.character}
                            </Link>
                            </td>
                            <td>{item.author}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>    )
}