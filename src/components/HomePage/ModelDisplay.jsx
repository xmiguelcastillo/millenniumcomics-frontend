import { Routes, Route, Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import {
    OrbitControls,
    Environment,
    PerspectiveCamera,
} from "@react-three/drei";
import {Spiderman} from "../../models/Spiderman.jsx";
function ModelDisplay() {
    return (
        <div className="flex flex-row lg:h-[400px] h-[320px]  rounded-[4px]
bg-[radial-gradient(ellipse_at_30%_40%,_rgba(229,9,20,0.08)_0%,_rgba(0,51,160,0.08)_35%,_rgba(0,0,0,1)_100%)] ">

            <div className="lg:w-1/3  w-[47%]  h-full ">
                <Canvas camera={{ position: [40, 5.5, 1], fov:9 }}>
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[0, 1, 9]} intensity={1} />
                    <Spiderman position={[0, -2.5, 0]} rotation={[0, Math.PI / 2, 0]} />
                    <Environment preset="city" />
                    <OrbitControls enableZoom={true}        autoRotate={true}
                    />
                </Canvas>
            </div>

            <div className="flex  flex-col lg:w-2/3 w-[65%] pt-10 lg:pl-15 pl-4 h-full ">
                <h1 className="hidden lg:flex text-[25px]">The Amazing Spider-Man</h1>

                <h1 className="flex lg:hidden text-[20px]">Spider-Man</h1>

                <div className="flex flex-row my-2 items-center">
                    <div className="rounded-[2px] p-1 border-1 bg-red-500 font-extrabold text-[8px] sm:text-[12px] flex items-center justify-center h-[24px]">
                        MARVEL
                    </div>
                    <div className="mx-3 h-[24px] border-l border-gray-500"></div>
                    <div className="rounded-[2px] border-1 p-1 bg-[#1d1d23] font-extrabold text-[8px] sm:text-[12px] flex items-center justify-center h-[24px]">
                        Super Hero
                    </div>
                </div>


                <h1 className="hidden md:flex justify-center items-center w-[80%] ">
                    Spider-Man is a superhero in American comic books published by Marvel Comics.
                    Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared
                    in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age
                    of Comic Books. Considered one of the most popular and commercially successful superheroes,
                    he has been featured in comic books, television shows, films, video games, novels, and plays.
                </h1>

                <h1 className="flex md:hidden justify-center items-center w-[90%] sm:w-[90%] text-[11px] ">
                    Spider-Man is a superhero in American comic books published by Marvel Comics.
                    Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared
                    in Amazing Fantasy #15 (August 1962).
                </h1>

                <div className="w-[80%] border-b-1 my-2"></div>

                <div className="flex flex-row lg:w-[80%] md:w-[80%] sm:w-[80%] w-[20%] lg:gap-10 gap-3  ">
                    <div className="flex flex-col">
                        <div className="lg:text-[15px] text-[10px] text-gray-300">Creation</div>
                        <div className="lg:text-[15px] text-[13px]">August 1962</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="lg:text-[15px] text-[10px] text-gray-300">Identity</div>
                        <div className="lg:text-[15px] text-[13px]">Peter Parker</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="lg:text-[15px] text-[10px] text-gray-300">Power</div>
                        <div className="lg:text-[15px] text-[13px]">Spider Webs</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default ModelDisplay;
