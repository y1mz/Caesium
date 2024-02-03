import Link from "next/link"

import ServerBox from '@/components/serverbox'
import Cards from '@/components/card'
import InfoContainer from "@/components/info-container"

import config from "@/config/siteconfig.json"
import cards from "@/config/cards.json"

function HomeContainer() {
    console.log(cards)
    return (
        <div className="flex flex-col gap-40 items-center justify-center mx-auto">
            <div className='flex flex-wrap gap-10 mx-auto'>
                <div className='hidden md:flex mx-auto'>
                    <iframe
                        src="https://discord.com/widget?id=748845037042794566&theme=dark"
                        width="300" height="500"
                        frameBorder="2"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                        className="mr-10"
                    >
                    </iframe>
                </div>
                <ServerBox
                    ServerIP={config.serverAdress}
                    ServerName={config.ServerName}
                    ServerDescription={config.ServerDescription}
                    ServerVersion={config.ServerVersion}
                    DiscordInvıte={`https://discord.gg/${config.DiscordInviteCode}`}
                />
            </div>
            <InfoContainer />
            <div className="flex flex-wrap gap-10 w-auto justify-center items-center">
                {cards.map((card) => (
                    <Link href={card.link}>
                        <Cards
                            title={card.title}
                            photo={card.img}
                            key={card.title}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default HomeContainer