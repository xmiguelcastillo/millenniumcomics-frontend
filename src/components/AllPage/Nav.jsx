import {Link} from "react-router-dom";

export default function Nav(){
    return (
        <div className="flex flex-row items-center justify-between w-[90%] max-w-[1200px] mx-auto my-10">
            <div className="w-1/5 flex flex-col items-center text-center">
                <div className="font-bold mb-1 text-[#60aefe]">GET</div>
            </div>

            <div className="w-1/5 flex flex-col text-center">
                <div className="font-bold mb-1 text-[#4acb90]">POST</div>
            </div>

            <div className="w-1/5 flex flex-col items-center text-center">
                <Link to={""}>
                <div className="font-bold mb-1">HOME</div>
                </Link>
            </div>

            <div className="w-1/5 flex flex-col items-center text-center">
                <div className="font-bold mb-1 text-[#fda231]">PUT</div>
            </div>

            <div className="w-1/5 flex flex-col items-center text-center">
                <div className="font-bold mb-1 text-[#f93e3e]">DELETE</div>
            </div>
        </div>    )
}