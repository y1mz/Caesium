import fs from "fs";
import path from "path";
import Image from "next/image";

function GalleryPage() {
    const gallery = getGallery()
    const photos = gallery.pngFiles;
    return (
        <div className="justify-center">
            <div className="items-center py-10">
                <h1 className="text-4xl text-center items-center">Gallery</h1>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center">
                {photos.map((file) => (
                    <div>
                        <Image 
                            className="rounded max-w-[1280px] max-h-[720px]"
                            src={`/photos/${file}`} 
                            alt={file}
			    key={file}
                            width={1600}
                            height={900}
                        />
                        <p className="text-sm text-center">{file}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GalleryPage;

export function getGallery() {
    const folderPath = path.join(process.cwd(), 'public/photos');
    const files = fs.readdirSync(folderPath);
    const pngFiles = files.filter((file) => file.endsWith('.png'));
    const testing = "testing"
    return {
        pngFiles: pngFiles,
    };
}
