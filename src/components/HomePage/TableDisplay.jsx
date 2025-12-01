import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabase.js";
export default function TableDisplay() {
  const [comicTable, setComicTable] = useState([]);

  const publisherColors = {
    Marvel: "bg-red-600",
    DC: "bg-[#0077f6]",
  };
  useEffect(() => {
    const fetchComics = async () => {
      const { data, error } = await supabase.from("comic").select("*");
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
    <div className="flex flex-col items-center justify-center   w-[10000px] ">
      <table className="w-full  border-collapse mb-2 border-[#4f4e4e] text-white text-sm">
        <thead className="bg-[#0e0f10]">
          <tr>
            <th className="px-4 py-2 text-left font-light">Number</th>
            <th className="px-4 py-2 text-left font-light">Comic</th>
            <th className="px-6 py-2 text-left font-light">Brand</th>
            <th className="px-6 py-2 text-left font-light">Character</th>
            <th className="px-6 py-2 text-left font-light">Author</th>
          </tr>
        </thead>
        <tbody className="border border-[#4f4e4e] rounded-xl">
          {comicTable.map((item, i) => (
            <tr key={item.id} className="h-24 hover:bg-[#121315]">
              <td className="pl-10">{i + 1}</td>
              <Link to={`${item.character}/${item.title}/${item.series_issue}`}>
                <td className="flex flex-row gap-2 pt-5 pb-1 ">
                  <img src={item.cover} className="w-14 h-20" />
                  <div className="flex flex-col">
                    <div>{item.title}</div>
                    <div>Issue # {item.series_issue}</div>
                    <div>
                      {item.series_year_start} - {item.series_year_end}
                    </div>
                  </div>
                </td>
              </Link>
              <td className="pl-6">
                <div
                  className={`w-[50px] text-center font-bold rounded-xs text-white ${
                    publisherColors[item.publisher] || "bg-gray-500"
                  }`}
                >
                  {item.publisher}
                </div>
              </td>

              <td className="pl-6">
                <Link to={item.character}>{item.character}</Link>
              </td>

              <td className="pl-6">{item.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
