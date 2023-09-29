import Image from "next/image"

function GalleryItem({ photo, src }) {
    return (
        <div className="flex w-[400px] justify-center flex-wrap">
            <a href={`/photos/${photo}`} className="p-3">
                <Image 
                    src={`/photos/${photo}`}
                    height={360}
                    width={640}
                    alt={photo}
                    className="block rounded-xl object-cover object-center hover:scale-110 transition duration-200"
                />
            </a>
        </div>
    )
}

export default GalleryItem