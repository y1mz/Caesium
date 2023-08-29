"use client";

import Image from "next/image";

function Cards({ photo, title }) {
    return (
        <div className="block max-w-[18rem] rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700 hover:bg-teal-800 transition duration-200">
            <div className="relative overflow-hidden bg-cover bg-no-repeat min-h-[150px] max-h-[150px]">
                <Image
                    className="rounded-t-lg"
                    src={photo}
                    width={400}
                    height={300}
                    alt="" />
            </div>
            <div className="p-4">
                <p className="text-2xl text-center text-gray-300 hover:text-gray">
                    {title}
                </p>
            </div>
        </div>
    )
}

export default Cards;