"use client"

import Button from "@/components/Button"
import NewsItem from "@/components/NewsItem"
import { ArrowIcon } from "@/../public/icons"
import { useTranslations } from "next-intl"

export interface NewsCardType {
    id: number
    description: string
    image: string
}

const News = () => {

    const t = useTranslations("News")

    const NewsCards: NewsCardType[] = [
        {
            id: 1,
            description: t("items.post1.desc"),
            image: "/images/sergei-news.png"
        },
        {
            id: 2,
            description: t("items.post2.desc"),
            image: "/images/news2-img.png"
        },
        {
            id: 3,
            description: t("items.post3.desc"),
            image: "/images/news3-img.png"
        }
    ]

    return (
        <div className="containers mt-17.75! pb-17.75!">
            <h2 className="text-center text-black text-[48px] leading-[150%]">
                {t("title")}
            </h2>
            <div className="flex items-center justify-between mt-35.75">
                {NewsCards.map((item) => (
                    <NewsItem item={item} key={item.id} />
                ))}
            </div>
            <Button extraStyle="mt-[71px] ml-auto">
                {t("button")}
                <ArrowIcon />
            </Button>
        </div>
    )
}

export default News