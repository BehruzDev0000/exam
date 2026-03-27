
import NewsItem from "@/components/NewsItem"
import { useTranslations } from "next-intl"
import { NewsCardType } from "./News"
import Button from "@/components/Button"
import { ArrowIcon } from "@/public/icons"
import { Link } from "@/i18n/navigation"
const NewsContent = ({filteredData}: {filteredData: NewsCardType[]}) => {
    const t = useTranslations("News")
  return (
    <div className="containers mt-17.75! !pb-17.75">
      <h2 className="text-center text-black text-[48px] leading-[150%]">
        {t("title")}
      </h2>

      <div className="flex items-center justify-between mt-35.75">
        {filteredData?.map((item: NewsCardType) => (
          <NewsItem item={item} key={item.id} />
        ))}
      </div>

      <Button extraStyle="mt-[71px] ml-auto">
       <Link className="flex items-center gap-[12px]" href={'news'}> {t("button")}
        <ArrowIcon />
        </Link>
      </Button>
      </div>
  )
}

export default NewsContent