import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Character from "./pages/Character.jsx";
import Tools from "./components/AllPage/Tools.jsx";
import ModelDisplay from "./components/HomePage/ModelDisplay.jsx";
import Nav from "./components/AllPage/Nav.jsx";
import Comic from "./pages/Comic.jsx";

function App() {
    return (
        <div className="bg-[#0e0f10] min-h-screen text-white">

            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/:name" element={<Character/>} />
                <Route path="/:character/:title/:issue" element={<Comic />}/>
            </Routes>
            <Tools/>
                <div className="flex flex-col justify-center items-center text-center mb-20">
                    <a
                        href="http://xmiguelcastillo.com"
                        className="font-bold justify-center items-center text-center w-[50%] hover:text-[#1f435f] transition"
                    >
                        By Miguel Castillo
                    </a>
                </div>

        </div>
    );
}

export default App;