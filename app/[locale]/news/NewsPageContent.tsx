import {  GalleryType } from "@/@types/mainTypes"
import GalleryItem from "@/components/galleryItem"
import HeroMenu from "@/components/heroMenu"
import NewsItem from "@/components/NewsItem"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { NewsCardType } from "@/modules/News/News"
import { useTranslations } from "next-intl"

const NewsPageContent = ({news, gallery}:{news:{data:NewsCardType[]}, gallery:{data:GalleryType[]}}) => {
    const t = useTranslations("News")
     const list = news?.data || []
  return (
      <div className="containers mt-7.5! pt-13.75! px-17! pb-25! bg-[linear-gradient(180deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_100%)] rounded-[50px] !mb-[71px] pb-[71px]">
      <HeroMenu />
      <h2 className="text-[#626464] text-[18px] leading-[150%] mt-[114px]">
  {t("page")} / <span className="text-black">{t("newsTitle")}</span>
</h2>

    <div className="mt-[31px]">
      <h2 className="text-black text-center mb-[143px] text-[48px] leading-[150%]">{t("newsTitle")}</h2>
     

  <div className="flex items-center justify-between flex-wrap gap-y-[117px]">
    {list.map((item: NewsCardType) => (
      <NewsItem key={item.id} item={item} />
    ))}
    <Pagination className="mt-[53px] [&_a]:hover:bg-transparent [&_a]:hover:text-inherit [&_a]:hover:no-underline">
  <PaginationContent className="gap-[15px]">

    <PaginationItem className="border-[0.5px] bg-white/40 border-[#000000] rounded-full w-[40px] h-[40px] flex items-center justify-center">
      <PaginationLink
        href="#"
        className="text-[20px] leading-[160%] !hover:bg-transparent !hover:text-inherit !hover:no-underline !focus:bg-transparent !active:bg-transparent"
      >
        1
      </PaginationLink>
    </PaginationItem>

    <PaginationItem className="border-[0.5px] bg-white/40 border-[#000000] rounded-full w-[40px] h-[40px] flex items-center justify-center">
      <PaginationLink
        href="#"
        className="text-[20px] leading-[160%] !hover:bg-transparent !hover:text-inherit !hover:no-underline !focus:bg-transparent !active:bg-transparent"
      >
        2
      </PaginationLink>
    </PaginationItem>

    <PaginationItem className="border-[0.5px] bg-white/40 border-[#000000] rounded-full w-[40px] h-[40px] flex items-center justify-center">
      <PaginationLink
        href="#"
        className="text-[20px] leading-[160%] !hover:bg-transparent !hover:text-inherit !hover:no-underline !focus:bg-transparent !active:bg-transparent"
      >
        3
      </PaginationLink>
    </PaginationItem>

    <PaginationItem className="bg-[#47474766] w-[40px] h-[40px] rounded-full flex items-center justify-center">
      <PaginationEllipsis className="text-[20px]" />
    </PaginationItem>

  </PaginationContent>
</Pagination>
</div>
<div className="mt-[54px]">
    <h2 className="text-black text-center mb-[143px] text-[48px] leading-[150%]">{t("galleryTitle")}</h2>
    <div className="mt-[75px] flex items-center justify-between flex-wrap gap-y-[47px]">
        {gallery?.data?.map((item: GalleryType) => (
          <GalleryItem key={item.id} item={item} />
        ))}
    </div>
     <Pagination className="mt-[53px] [&_a]:hover:bg-transparent [&_a]:hover:text-inherit [&_a]:hover:no-underline">
  <PaginationContent className="gap-[15px]">

    <PaginationItem className="border-[0.5px] bg-white/40 border-[#000000] rounded-full w-[40px] h-[40px] flex items-center justify-center">
      <PaginationLink
        href="#"
        className="text-[20px] leading-[160%] !hover:bg-transparent !hover:text-inherit !hover:no-underline !focus:bg-transparent !active:bg-transparent"
      >
        1
      </PaginationLink>
    </PaginationItem>

    <PaginationItem className="border-[0.5px] bg-white/40 border-[#000000] rounded-full w-[40px] h-[40px] flex items-center justify-center">
      <PaginationLink
        href="#"
        className="text-[20px] leading-[160%] !hover:bg-transparent !hover:text-inherit !hover:no-underline !focus:bg-transparent !active:bg-transparent"
      >
        2
      </PaginationLink>
    </PaginationItem>

    <PaginationItem className="border-[0.5px] bg-white/40 border-[#000000] rounded-full w-[40px] h-[40px] flex items-center justify-center">
      <PaginationLink
        href="#"
        className="text-[20px] leading-[160%] !hover:bg-transparent !hover:text-inherit !hover:no-underline !focus:bg-transparent !active:bg-transparent"
      >
        3
      </PaginationLink>
    </PaginationItem>

    <PaginationItem className="bg-[#47474766] w-[40px] h-[40px] rounded-full flex items-center justify-center">
      <PaginationEllipsis className="text-[20px]" />
    </PaginationItem>

  </PaginationContent>
</Pagination>
</div>
    </div>
    </div>
  )
}

export default NewsPageContent