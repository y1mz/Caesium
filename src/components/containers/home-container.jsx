import Link from "next/link"

import ServerBox from '@/components/serverbox'
import Cards from '@/components/card'
import InfoContainer from "@/components/info-container"

import config from "&/config/siteconfig.json"
import cards from "&/config/cards.json"

function HomeContainer() {
    return (
        <div className="flex flex-col gap-40 items-center justify-center mx-auto">
            <div className='flex flex-wrap gap-10 mx-auto'>
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
                {cards.map((card, index) => (
                    <Link href={card.link} key={index}>
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
