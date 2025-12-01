import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
export default function PublishserDisplay() {
  const [publisherList, setPublisherList] = useState([]);
  useEffect(() => {
    const fetchPublisherList = async () => {
      const { data, error } = await supabase.from("comic").select("publisher");
      if (error) {
        console.log("Supabase error:", error);
        return;
      }

      const unique = [...new Set(data.map((item) => item.publisher))];
      setPublisherList(unique);
    };
    fetchPublisherList();
  }, []);
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex bg-[#6f0101] w-90 h-90 border rounded-sm justify-center items-center">
        <div className="flex flex-col bg-amber-400 w-[70%] h-[70%] opacity-30">
          <div className="flex justify-center items-center h-[20%]"></div>
          <div className="flex h-[80%]">

            <div></div>
          </div>

        </div>
      </div>
    </div>
  );
}
