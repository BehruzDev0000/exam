"use client"

import { PizzaIcon } from "lucide-react"
import { AtmosphereIcon, CarIcon, ChefIcon, MaintenanceIcon, SoupIcon } from "@/../public/icons"
import { ReactNode } from "react"
import AdvantageItem from "@/components/AdvantageItem"
import { useTranslations } from "next-intl"

export interface AdvantageListType {
    id: number
    title: string
    description: string
    icon: ReactNode
}

const Advantages = () => {

    const t = useTranslations("WhyUs")

    const AdvantageList: AdvantageListType[] = [
        {
            id: 1,
            title: t("items.quality.title"),
            description: t("items.quality.desc"),
            icon: <SoupIcon />
        },
        {
            id: 2,
            title: t("items.delivery.title"),
            description: t("items.delivery.desc"),
            icon: <CarIcon />
        },
        {
            id: 3,
            title: t("items.recipes.title"),
            description: t("items.recipes.desc"),
            icon: <PizzaIcon />
        },
        {
            id: 4,
            title: t("items.atmosphere.title"),
            description: t("items.atmosphere.desc"),
            icon: <AtmosphereIcon />
        },
        {
            id: 5,
            title: t("items.chefs.title"),
            description: t("items.chefs.desc"),
            icon: <ChefIcon />
        },
        {
            id: 6,
            title: t("items.service.title"),
            description: t("items.service.desc"),
            icon: <MaintenanceIcon />
        }
    ]

    return (
        <div className="containers pb-17.75">
            <h2 className="text-[48px] leading-[150%] text-black text-center">
                {t("title")}
            </h2>
                  <div className="mt-19.25 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10.75 gap-y-10 place-items-start">
                {AdvantageList.map((item) => (
                    <AdvantageItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Advantages