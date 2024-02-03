import { lazy, Suspense } from "react"
import dynamicIconImports from "lucide-react/dynamicIconImports"

import items from "@/config/infoSection.json"

const Icon = ({ name, ...props }) => {
    const LucideIcon = lazy(dynamicIconImports[name])
    const fallback = <div style={{ background: '#ddd', width: 24, height: 24 }}/>

    return (
        <Suspense fallback={fallback} >
            <LucideIcon {...props} />
        </Suspense>
    )
}

function InfoItem({ text, alt, icon, color }) {

    let icon_color

    if (!color) {
        const icon_color = "#D2D2D2"
    }
    icon_color = color

    return (
        <div className="p-5">
            <div className="flex flex-col gap-2">
                <div className="justify-center mx-auto text-center">
                    <Icon name={icon} size={48} color={icon_color}/>
                </div>
                <div className="text-xl font-bold">
                    {text}
                </div>
                <p className="text-sm">{alt}</p>
            </div>
        </div>
    )
}


function InfoContainer() {
    return (
        <div
            className="max-w-[768px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700 rounded-2xl w-full">
            <div className="p-5">
                <div className="mx-auto justify-center text-center">
                    <div className="grid sm:grid-cols-2">
                        {items.map((item) => (
                            <InfoItem
                                text={item.text}
                                icon={item.icon}
                                color={item.color}
                                key={item.text}
                                alt={item.alt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoContainer