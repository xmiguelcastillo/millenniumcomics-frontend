import FeaturedDisplay from "../components/HomePage/FeaturedDisplay.jsx";
import "../App.css"
import ModelDisplay from "../components/HomePage/ModelDisplay.jsx";
import TableDisplay from "../components/HomePage/TableDisplay.jsx";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-[90%] max-w-[1200px] mx-auto h-full px-4">


            <div className="w-full flex flex-col items-start mt-10">
                <h1 className="text-2xl font-light mb-4 flex flex-row gap-2">ICONIC 3D{"  "}  <h1 className="text-blue-600"> CHARACTERS</h1></h1>
                <div className="w-full flex justify-center">
                    <ModelDisplay />
                </div>
            </div>


            <div className="w-full flex flex-col items-start mt-10">
                <h1 className="text-2xl font-light mb-4 flex flex-row gap-2">FEATURED COMIC {"  "}  <h1 className="text-red-600"> BRANDS</h1></h1>
                <div className="w-full flex justify-center">
                    <FeaturedDisplay />
                </div>
            </div>

            <div className="w-full flex flex-col items-start mt-10">
                <h1 className="hidden md:flex justify-center items-center text-2xl font-light mb-4 flex flex-row gap-2 ">
                    RANDOMIZED COMICS FROM{"  "}
                    <h1 className="text-[#00ff91]"> POSTGRES(SUPABASE)</h1>
                </h1>
                <h1 className="flex md:hidden justify-center items-center text-2xl font-light mb-4 flex flex-row gap-2 ">
                    RANDOMIZED{"  "}
                    <h1 className="text-[#00ff91]"> POSTGRES</h1>
                </h1>
                <div className="w-full flex justify-center">
                    <TableDisplay />
                </div>
            </div>
        </div>
    );
}

export default Home;