import { Feed } from "feed";
import Showdown from "showdown";
import { getPostMetadata } from "@/libs/getPostMetadata";

export async function GET() {

    var converter = new Showdown.Converter();

    const mtoh = ({ content }) => {
        const text = content;
        const html = converter.makeHtml(text);

        return html;
    };

    const metadata = {
        title: "TBN MC Server Updates",
        author: "TBNMC",
        description: "TBN MC Server Updates",
        url: "www.tbnmc.xyz",
    };

    const postMetadataReversed = getPostMetadata();
    const postMetadata = postMetadataReversed.slice(-10).reverse();
    const posts = postMetadata;

    const feed = new Feed({
        title: metadata.title,
        description: metadata.description,
        link: metadata.url,
        favicon: `${metadata.url}/logo.png`,
        image: `${metadata.url}/logo.png`,
        copyright: `GPLv3 ${new Date().getFullYear()}`,
        updated: new Date(),
        generator: `Manually typed by Batuhan Y. Yilmaz`,
        feedLinks: {
            rss2: `${metadata.url}/feed.xml`
        },
    });

    posts.map((post) => {
        const url = `${metadata.url}/blog/${post.slug}`;

        feed.addItem({
            title: post.title,
            id: url,
            link: url,
            content: mtoh({ content: post.content }),
            date: new Date(post.date),
            author: post.author,
        });
    });

    return new Response(feed.rss2());

}
