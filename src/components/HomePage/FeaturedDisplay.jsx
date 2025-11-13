import { useState } from "react"
import { Link } from "react-router-dom"

export default function FeaturedDisplay() {
    const cards = [
        {
            id: 1,
            title: "Batman Comics",
            date: "March 30, 1939",
            img: "/batmanfeat.webp",
            bg: "#4d3424",
            link: "/Batman",
        },
        {
            id: 2,
            title: "Spiderman Comics",
            date: "June 5, 1962",
            img: "/spidermanfeat.jpg",
            bg: "#4d3424",
            link: "/Spiderman",
        },
        {
            id: 3,
            title: "Superman Comics",
            date: "April 18, 1938",
            img: "/supermanfeat.jpg",
            bg: "#4d3424",
            link: "/Superman",
        },
    ]

    const [index, setIndex] = useState(0)

    const nextCard = () => setIndex((prev) => (prev + 1) % cards.length)
    const prevCard = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length)

    return (
        <div className="w-full flex flex-col items-center justify-center bg-[#0e0f10] py-2">
            <div className="hidden md:flex flex-row justify-center gap-6">
                {cards.map((card, i) => (
                    <Link to={card.link}>
                    <div
                        key={i}
                        className={`flex flex-col items-center justify-center text-white border border-[#4f4e4e] rounded-[5px] lg:w-[100%] w-[340px] h-[420px]`}
                        style={{ backgroundColor: card.bg }}
                    >
                        <div className="h-[80%] w-full rounded-t-[5px] overflow-hidden">
                            <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="h-[10%] w-full flex items-center justify-center bg-[#1a1c1f] rounded-b-[5px]">
                            {card.title}
                        </div>
                        <div className="h-[10%] w-full flex items-center justify-center bg-[#1a1c1f] rounded-b-[5px]">
                            {card.date}
                        </div>
                    </div>
                    </Link>
                ))}
            </div>

            <div className="flex md:hidden flex-col  w-full mb-5">

                <div className="flex flex-row  h-[50px] mt-4 mb-4">
                    <div className="flex justify-center items-center w-[70%] text-[17px] font-semibold"> </div>
                    <div className="flex w-[20%] mb-2 gap-4">
                        <button
                            onClick={prevCard}
                            className="border-[.50px] px-4 border-[#bebebe]  bg-[#1d1d23] text-white rounded hover:bg-[#2a2a2a]"
                        >
                            {`<`}
                        </button>
                        <button
                            onClick={nextCard}
                            className="px-4 border-[.50px] w-[100%] h-[100%]  border-[#bebebe] bg-[#1d1d23] text-white rounded hover:bg-[#2a2a2a]"

                        >
                            {`>`}
                        </button>
                    </div>
                </div>
                <Link to={cards[index].link}>
                <div
                    className={`flex flex-col items-center justify-center text-white border border-[#4f4e4e] rounded-[5px] w-[100%] h-[400px] transition-all duration-500`}
                    style={{ backgroundColor: cards[index].bg }}
                >
                    <div className="h-[80%] w-full rounded-t-[5px] overflow-hidden">
                        <img src={cards[index].img} alt={cards[index].title} className="w-full h-full object-cover" />
                    </div>
                    <div className="h-[10%] w-full flex items-center justify-center bg-[#1a1c1f] rounded-b-[5px]">
                        {cards[index].title}
                    </div>
                    <div className="h-[10%] w-full flex items-center justify-center bg-[#1a1c1f] rounded-b-[5px]">
                        {cards[index].date}
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}