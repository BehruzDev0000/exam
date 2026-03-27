"use client"

import Button from "@/components/Button"
import DishesItem from "@/components/Dishes"
import Image from "next/image"
import { ArrowIcon } from "@/../public/icons"
import { useTranslations } from "next-intl"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Dishes = () => {

    const t = useTranslations("PopularDishes")

    const FoodList = [
        {
            id: 1,
            title: t("dish.title"),
            description: t("dish.description"),
            price: t("dish.price")
        },
        {
            id: 2,
            title: t("dish.title"),
            description: t("dish.description"),
            price: t("dish.price")
        },
        {
            id: 3,
            title: t("dish.title"),
            description: t("dish.description"),
            price: t("dish.price")
        },
        {
            id: 4,
            title: t("dish.title"),
            description: t("dish.description"),
            price: t("dish.price")
        },
        {
            id: 5,
            title: t("dish.title"),
            description: t("dish.description"),
            price: t("dish.price")
        }
    ]

    return (
        <div className="mt-15! containers relative">

            <h2 className="text-center text-[#000000] text-[48px]">
                {t("title")}
            </h2>

            <Carousel className="mt-31.75 w-full overflow-visible">

                <CarouselContent>

                    {FoodList.map((item) => (
                        <CarouselItem
                            key={item.id}
                            className="basis-full sm:basis-1/2 lg:basis-1/4 pl-8"
                        >
                            <DishesItem item={item} />
                        </CarouselItem>
                    ))}

                </CarouselContent>

                <CarouselPrevious className="-left-14 bg-white shadow-md" />
                <CarouselNext className="-right-14 bg-white shadow-md" />

            </Carousel>

            <Image
                src="/images/leaf2.png"
                width={258}
                height={258}
                alt="Leaf"
                className="absolute -bottom-50 -left-50"
            />

            <Image
                src="/images/leaf3.png"
                width={252}
                height={253}
                alt="Leaf"
                className="absolute -top-15 -right-17.5"
            />

            <Button extraStyle="mt-[57px] right-0 absolute">
                {t("menuButton")}
                <ArrowIcon />
            </Button>

        </div>
    )
}

export default Dishes