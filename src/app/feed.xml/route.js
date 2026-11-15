import { Feed } from "feed";
import Showdown from "showdown";
import { getPostMetadata } from "@/libs/getPostMetadata";
import config from "&/config/siteconfig.json"

export async function GET() {

    var converter = new Showdown.Converter();

    const mtoh = ({ content }) => {
        const text = content;
        const html = converter.makeHtml(text);

        return html;
    };

    const metadata = {
        title: `${config.ServerName} Server Updates`,
        author: config.authorName,
        description: `${config.ServerName} Server Updates`,
        url: new URL(config.SiteUrl + "feed.xml"),
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
        generator: `Caesium RSS Generator`,
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
