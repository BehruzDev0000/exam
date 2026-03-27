"use client"

import { useEffect, useState } from "react"
import { Category, Product } from "@/@types/mainTypes"
import HeroMenu from "@/components/heroMenu"
import { useTranslations } from "next-intl"
import { useQuery } from "@tanstack/react-query"
import { getProductByCategoryId } from "@/service/getAll"
import DishesItem from "@/components/Dishes"
import { NewsCardType } from "@/modules/News/News"
import NewsItem from "@/components/NewsItem"
import Button from "@/components/Button"
import { Link } from "@/i18n/navigation"

const MenuPageContent = ({
  categories,
  products,
  news
}: {
  categories: Category[]
  products: Product[]
  news: NewsCardType[]
}) => {

  const t = useTranslations("Menu")

  const [showEmpty, setShowEmpty] = useState(false)

  const [activeId, setActiveId] = useState<number>(
    categories?.[categories.length - 1]?.id || 0
  )

  const { data, isLoading } = useQuery({
    queryKey: ["products", activeId],
    queryFn: () => getProductByCategoryId(String(activeId)),
    enabled: categories.length > 0 && !!activeId,
    initialData: { data: products }
  })

  const productsList =
    categories.length === 0 ? products : data?.data || []

  useEffect(() => {
    if (categories.length === 0) {
      setShowEmpty(true)

      const timer = setTimeout(() => {
        setShowEmpty(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [categories])

  return (
    <div className="containers mt-7.5! pt-13.75! px-17! pb-25! bg-[linear-gradient(180deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_100%)] rounded-[50px] !mb-[71px] pb-[71px]">

      <HeroMenu />

      <h2 className="text-[#626464] text-[18px] leading-[150%] mt-[107px]">
        {t("page")} / <span className="text-black">{t("title")}</span>
      </h2>

      <div className="mt-[30px]">

        <h2 className="text-black text-[48px] text-center">
          {t("title")}
        </h2>

        {categories.length > 0 && (
          <div className="flex justify-center mt-[58px]">
            <div className="flex gap-3 px-[20px] py-[10px] bg-white/40 rounded-full backdrop-blur-md">
              {categories.toReversed().map((item) => {
                const isActive = item.id === activeId

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`px-[28px] py-[2px] rounded-full cursor-pointer transition text-[20px] leading-[150%] text-black ${
                      isActive ? "bg-white/40" : "bg-transparent"
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {showEmpty && (
          <div className="flex justify-center mt-10">
            <div className="bg-white shadow-lg rounded-3xl px-10 py-8 text-center max-w-md w-full animate-fadeIn">
              <div className="text-5xl mb-4">😕</div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Kategoriyalar topilmadi
              </h2>
              <p className="text-gray-400 mt-2">
                Iltimos, keyinroq yana urinib ko‘ring
              </p>
            </div>
          </div>
        )}

        <div className={`flex flex-wrap items-center gap-x-[45px] gap-y-[145px] justify-between mb-[55px] ${productsList.length > 0 ? "mt-[156px]" : "mt-10"}`}>

          {isLoading ? (
            <p className="text-center w-full text-gray-500">
              Loading...
            </p>
          ) : productsList.length > 0 ? (
            productsList.map((item: Product) => (
              <Link href={`/menu/${item.id}`} key={item.id}>
              <DishesItem key={item.id} item={item} />
              </Link>
            ))
          ) : (
            <div className="flex justify-center w-full">
              <div className="bg-white shadow-lg rounded-3xl px-10 py-8 text-center max-w-md w-full">
                <div className="text-5xl mb-4">😕</div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Mahsulotlar topilmadi
                </h2>
                <p className="text-gray-400 mt-2">
                  Iltimos, keyinroq yana urinib ko‘ring
                </p>
              </div>
            </div>
          )}

        </div>

        <div>
          <h2 className="text-center text-[48px] text-black">
            {t("newsTitle")}
          </h2>

          <div className="flex items-center flex-wrap justify-between mt-[143px] gap-y-[197px]">
            {news.map((item) => (
              <NewsItem key={item.id} item={item} />
            ))}
          </div>

          <Button extraStyle="mt-[71px] ml-auto cursor-pointer">
            <Link href="/news">{t("newsButton")}</Link>
          </Button>
        </div>

      </div>
    </div>
  )
}

export default MenuPageContent