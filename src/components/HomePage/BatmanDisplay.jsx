import { Routes, Route, Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import {
    OrbitControls,
    Environment,
    PerspectiveCamera,
} from "@react-three/drei";
import {Batman} from "../../models/Batman.jsx";

function BatmanDisplay() {
    return (
        <div className="flex flex-row  h-[400px] rounded-[3px]
bg-[radial-gradient(ellipse_at_30%_40%,_rgba(163,191,255,0.10)_0%,_rgba(0,51,100,0.08)_35%,_rgba(0,0,0,1)_100%)]">

            <div className="lg:w-1/3  w-[40%] h-full ">
                <Canvas camera={{ position: [60, 1, 1], fov:2 }}>
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[0, 1, 9]} intensity={1} />
                    <Batman position={[0, -0.86, 0]} rotation={[0, Math.PI / 2, 0]} />                    0
                    <Environment preset="city" />
                    <OrbitControls enableZoom={true} />
                </Canvas>
            </div>
            <div className="flex  flex-col lg:w-2/3  w-[60%] pt-10 pl-15 h-full ">

                <h1 className="text-[25px]">Batman (The Dark Knight)</h1>
                <div className="flex flex-row my-2">
                    <div className=" rounded-[1px] p-1 bg-blue-500 font-extrabold">DC</div>
                    <div className="mx-3 h-full border-l-1"></div>
                    <div className=" rounded-[2px] p-1 bg-[#1d1d23]">Super Hero</div>
                </div>
                <h1 className="hidden md:flex justify-center items-center w-[80%] ">
                    Batman is a superhero who appears in American comic books published by DC Comics. Batman was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of
                    the comic book Detective Comics on March 30, 1939. In the DC Universe, Batman is the alias of Bruce Wayne, a wealthy American playboy, philanthropist, and
                    industrialist who resides in the fictional Gotham City. His origin story features him swearing vengeance against criminals
                    after witnessing the murder of his parents.
                </h1>

                <h1 className="flex md:hidden justify-center items-center w-[80%] text-[11px] ">
                    Batman is a superhero who appears in American comic books published by DC Comics. Batman was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of
                    the comic book Detective Comics on March 30, 1939. In the DC Universe, Batman is the alias of Bruce Wayne, a wealthy American playboy, philanthropist, and
                    industrialist who resides in the fictional Gotham City.
                </h1>
                <div className="w-[80%] border-b-1 my-2"></div>

                <div className="flex flex-row lg:w-[80%] md:w-[80%] sm:w-[80%] w-[50px] lg:gap-10 gap-3  ">
                    <div className="flex flex-col">
                        <div className="lg:text-[15px] text-[10px] text-gray-300">Creation</div>
                        <div className="lg:text-[15px] text-[13px]">May 1939</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="lg:text-[15px] text-[10px] text-gray-300">Identity</div>
                        <div className="lg:text-[15px] text-[13px]">Bruce Wayne</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="lg:text-[15px] text-[10px] text-gray-300">Power</div>
                        <div className="lg:text-[15px] text-[13px]">None</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default BatmanDisplay;
