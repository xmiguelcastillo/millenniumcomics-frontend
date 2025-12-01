import FeaturedDisplay from "../components/HomePage/FeaturedDisplay.jsx";
import "../App.css";
import ModelDisplay from "../components/HomePage/ModelDisplay.jsx";
import TableDisplay from "../components/HomePage/TableDisplay.jsx";
import PublishserDisplay from "../components/HomePage/PublishersDisplay.jsx";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-[90%] max-w-[1200px] mx-auto h-full px-4">
      <div className="w-full flex flex-col items-start mt-10">
        <div className="w-full flex justify-center">
          <TableDisplay />
        </div>
      </div>
    </div>
  );
}

export default Home;
