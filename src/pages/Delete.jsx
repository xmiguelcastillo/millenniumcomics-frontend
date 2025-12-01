import { useState } from "react";

export default function Delete() {
  const [formData, setFormData] = useState({
    title: "",
    seriesIssue: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const deleteComic = async (e) => {
    e.preventDefault();
    const { title, seriesIssue } = formData;

    if (!title || !seriesIssue) {
      alert("Enter both title and series issue");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:8080/delete?title=${title}&seriesIssue=${seriesIssue}`,
        { method: "DELETE" },
      );

      const message = await res.text();

      if (!res.ok) {
        alert("❌ " + message);
        return;
      }

      alert("✅ " + message);
      setFormData({ title: "", seriesIssue: "" });
    } catch {
      alert("❌ Delete failed");
    }
  };

  return (
    <div className="flex flex-col items-center w-[90%] max-w-[500px] mx-auto my-10 bg-[#0b0c0e] border border-[#242528] rounded-md p-6">
      <h1 className="text-xl font-normal mb-5">Delete Comic</h1>

      <form onSubmit={deleteComic} className="w-full flex flex-col gap-4">
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="bg-[#0b0c10] text-white border border-[#242528] rounded-sm h-10 pl-3"
        />

        <input
          name="seriesIssue"
          placeholder="Series Issue"
          value={formData.seriesIssue}
          onChange={handleChange}
          className="bg-[#0b0c10] text-white border border-[#242528] rounded-sm h-10 pl-3"
        />

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-bold"
        >
          Delete Comic
        </button>
      </form>
    </div>
  );
}
