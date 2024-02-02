import config from "@/config/siteconfig.json"

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `https://${config.siteUrl}/sitemap.xml`,
    }
}
