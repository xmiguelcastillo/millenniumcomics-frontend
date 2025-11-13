export default function CodeFrame({ name, link }) {
    return (
        <div className="flex items-center justify-between w-[170px] h-[40px] px-3 py-2
                    border-1 border-gray-600 mb-4  rounded-md  text-white
                     transition">

            <div className="font-medium text-sm truncate">
                {name}
            </div>
            <div className="flex items-center justify-center">
                <img
                    src={link}
                    alt={name}
                    className="w-[24px] h-[24px] object-contain"
                />
            </div>
        </div>
    );
}