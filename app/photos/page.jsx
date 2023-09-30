import fs from "fs";
import path from "path";
import localFont from "next/font/local";
import GalleryItem from "@/components/gallery-item";

const myFont = localFont({
    src: "./Minecraft.woff2",
    display: 'swap',
});

export function getGallery() {
    const folderPath = path.join(process.cwd(), 'public/photos');
    const files = fs.readdirSync(folderPath);
    const pngFiles = files.filter((file) => file.endsWith('.png'));
    return {
        pngFiles: pngFiles,
    };
}

async function GalleryPage() {
    const gallery = await getGallery()
    const photos = gallery.pngFiles;
    return (
        <div className="justify-center">
            <div className="items-center py-10">
                <h1 className={`text-4xl text-center items-center ${myFont.className}`}>Gallery</h1>
            </div>
            <div className="container ml-auto px-5 py-2">
                <div className="justify-center items-center md:ml-[70px]">
                    <div className="flex flex-wrap gap-2">
                        {photos.map((file) => (
                            <GalleryItem
                                key={file}
                                photo={file}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryPage;


