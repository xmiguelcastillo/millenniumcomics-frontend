import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex flex-row items-center justify-between w-[90%] max-w-[1200px] mx-auto my-10  ">
      <div className="w-1/5 flex flex-col items-center text-center">
        <div className="font-bold mb-1 text-[#60aefe]">Get</div>
      </div>
      <div className="w-1/5 flex flex-col text-center">
        <Link to={"/post"}>
          <div className="font-bold mb-1 text-[#4acb90]">Post</div>
        </Link>
      </div>

      <div className=" w-1/5 flex flex-col items-center text-center">
        <Link to={""}>
          <div className="font-bold mb-1">Home</div>
        </Link>
      </div>

      <div className="w-1/5 flex flex-col items-center text-center">
        <div className="font-bold mb-1 text-[#fda231]">Put</div>
      </div>

      <div className="w-1/5 flex flex-col items-center text-center">
          <div className="font-bold mb-1 text-[#ff0932]">Delete</div>
      </div>
    </div>
  );
}
