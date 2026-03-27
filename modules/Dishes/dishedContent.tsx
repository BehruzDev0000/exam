import { Product } from "@/@types/mainTypes"
import Button from "@/components/Button"
import DishesItem from "@/components/Dishes"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ArrowIcon } from "@/public/icons"
import { useTranslations } from "next-intl"

const DishesContent = ({dishes}:{dishes:Product[]}) => {
     const t = useTranslations("PopularDishes")
  return (
      <div className="mt-15! containers relative">

            <h2 className="text-center text-[#000000] text-[48px]">
                {t("title")}
            </h2>

            <Carousel className="mt-31.75 w-full overflow-visible">

                <CarouselContent>

                    {dishes.map((item) => (
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

          

            <Button extraStyle="mt-[57px] right-0 absolute">
                {t("menuButton")}
                <ArrowIcon />
            </Button>

        </div>
  )
}

export default DishesContent