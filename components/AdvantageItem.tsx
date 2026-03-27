"use client"

import { ReactNode } from "react"

export interface AdvantageListType {
    id: number
    title: string
    description: string
    icon: ReactNode
}

interface AdvantageItemProps {
    item: AdvantageListType
}

const AdvantageItem = ({ item }: AdvantageItemProps) => {
    return (
        <div className="w-full max-w-90">
            <div className="text-black [&_svg]:w-13.5 [&_svg]:h-13.5">
                {item.icon}
            </div>
            <h3 className="text-[42px] leading-[120%] text-black mt-2.75">{item.title}</h3>
            <p className="text-[16px] leading-[160%] text-[#000000] mt-1">{item.description}</p>
        </div>
    )
}

export default AdvantageItem
