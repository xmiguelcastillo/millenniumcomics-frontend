import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../lib/supabase.js";

function Character() {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  const [page, setPage] = useState(0);
  const PAGE_SIZE = 8;

  useEffect(() => {
    const fetchCharacter = async () => {
      const { data, error } = await supabase
        .from("comic")
        .select("*")
        .eq("character", name);

      if (error) {
        console.error("Supabase error:", error);
        setLoading(false);
        return;
      }

      setComics(data || []);
      setLoading(false);
    };

    fetchCharacter();
  }, [name]);

  const paginated = comics.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const nextPage = () => {
    if ((page + 1) * PAGE_SIZE < comics.length) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  if (loading) {
    if (loading) return <div className="text-white text-center">Loading</div>;
  }

  return (
    <div className="flex flex-col items-center  max-w-[1200px] lg:w-[1100px] sm:w-[900px] md:w-[900px] w-[60%] mx-auto mt-4">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {paginated.length === 0 ? (
          <p className="text-gray-400 col-span-full text-center">
            No comics found.
          </p>
        ) : (
          paginated.map((comic) => (
            <Link key={comic.id} to={`${comic.title}/${comic.series_issue}`}>
              <div className="h-[450px] flex flex-col rounded-[4px] border border-[#123137] overflow-hidden">
                <div className="h-[10%] flex items-center justify-center text-sm font-semibold text-white px-2 text-center">
                  {comic.title} #{comic.series_issue}
                </div>

                <div className="h-[80%] flex items-center justify-center overflow-hidden">
                  <img
                    src={comic.cover || "/placeholder.webp"}
                    alt={comic.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="h-[10%] flex items-center justify-center text-xs text-gray-400">
                  Total Issues: {comic.total_issues ?? "N/A"}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      {comics.length > PAGE_SIZE && (
        <div className="flex gap-4 mt-6">
          <button
            onClick={prevPage}
            className={`px-4 py-2 rounded border-1 border-[#123137] text-white ${
              page === 0 && "opacity-40 cursor-not-allowed"
            }`}
            disabled={page === 0}
          >
            ‹
          </button>

          <button
            onClick={nextPage}
            className={`px-4 py-2 rounded border-1 border-[#123137] text-white ${
              (page + 1) * PAGE_SIZE >= comics.length &&
              "opacity-40 cursor-not-allowed"
            }`}
            disabled={(page + 1) * PAGE_SIZE >= comics.length}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

export default Character;

