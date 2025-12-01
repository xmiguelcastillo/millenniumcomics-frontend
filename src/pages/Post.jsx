import { useState, useEffect } from "react";

export default function Post() {
  const inputs = [
    { name: "title", placeholder: "Title" },
    { name: "publisher", placeholder: "Publisher" },
    { name: "character", placeholder: "Character" },
    { name: "author", placeholder: "Author" },
    { name: "seriesIssue", placeholder: "Series Issue" },
    { name: "issueYear", placeholder: "Issue Year" },
    { name: "seriesYearStart", placeholder: "Series Year Start" },
    { name: "seriesYearEnd", placeholder: "Series Year End" },
    { name: "totalIssues", placeholder: "Total Issues" },
    { name: "cover", placeholder: "Cover Link" },
    { name: "summary", placeholder: "Summary" },
    { name: "sale", placeholder: "Sale" },
    { name: "releaseDate", placeholder: "Release Date" },
  ];
  const [formData, setFormData] = useState({});
  const [lastComic, setLastComic] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchLastComic = async () => {
      const res = await fetch("http://localhost:8080/latest");
      const data = await res.json();
      setLastComic(data);
    };

    fetchLastComic();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/post/comic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          issueYear: Number(formData.issueYear),
          seriesYearStart: Number(formData.seriesYearStart),
          seriesYearEnd: Number(formData.seriesYearEnd),
          totalIssues: Number(formData.totalIssues),
          sale: Number(formData.sale),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to post comic");
      }
      const data = await res.json();
      console.log("Comic Posted:", data);
      setLastComic(data);
    } catch (err) {
      console.error("Error Type:", err);
      alert("Cannot Post Comic");
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="flex justify-center items-center text-center text-xl font-normal mb-3 mt-3">
        Lastest Comic added to database
      </h1>
      {lastComic && (
        <div className="flex flex-col items-center justify-center w-full max-w-[800px] mx-auto mt-8 px-3  bg-[#0b0c0e] border border-[#242528]  rounded-md">
          <div className="flex flex-col md:flex-row w-full items-start gap-5">
            <div
              className="flex items-center justify-center
        w-full md:w-1/3
        h-[320px]
         rounded-lg"
            >
              <img
                src={lastComic.cover}
                alt={lastComic.title}
                className="w-[75%] h-[85%] object-cover rounded-md"
              />
            </div>

            <div
              className="flex flex-col
        w-full md:w-2/3
        p-3"
            >
              <h1 className="text-lg md:text-2xl mb-2 font-semibold">
                {lastComic.title} #{lastComic.seriesIssue}
              </h1>

              <h2 className="text-sm md:text-base font-light mb-2 leading-snug">
                {lastComic.summary}
              </h2>

              <div className="border-b my-2"></div>

              <div className="flex flex-col gap-2 text-white text-xs md:text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold">Publisher</span>
                  <span>{lastComic.publisher}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Character</span>
                  <span>{lastComic.character}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Author</span>
                  <span>{lastComic.author}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Year</span>
                  <span>{lastComic.issueYear}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Total Issues</span>
                  <span>{lastComic.totalIssues}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Release</span>
                  <span>{lastComic.releaseDate}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Price</span>
                  <span>${lastComic.sale}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <h1 className="flex justify-center items-center text-center text-xl font-normal  mt-5">
        Add to our SpringBoot API
      </h1>
      <div className="flex flex-col items-center w-[90%] max-w-[800px] mx-auto my-10  bg-[#0b0c0e] border border-[#242528]  rounded-md pt-3">
        <form onSubmit={handleSubmit} className="w-full grid grid-cols-2 gap-4">
          {inputs.map((input) => (
            <div
              key={input.name}
              className="flex flex-col justify-center items-center "
            >
              <div>{input.placeholder}</div>
              <input
                name={input.name}
                onChange={handleChange}
                className="bg-[#0b0c10] text-white border border-[#242528] rounded-sm h-9 mt-2 pl-2"
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-[#0b0c10] w-full border border-[#242528]   col-span-2 py-3 rounded-md font-bold"
          >
            Submit Comic
          </button>
        </form>
      </div>
    </div>
  );
}
