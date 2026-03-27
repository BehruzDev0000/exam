import Image from "next/image"

import { NewsCardType } from "@/modules/News/News"
import { SergeiIcon } from "@/../public/icons"

const NewsItem = ({ item }: { item: NewsCardType }) => {
  return (
    <div className="w-90 rounded-[30px] bg-white/40 p-6">

      <div className="relative w-53.25 h-39.5 rounded-3xl overflow-hidden -mt-16 mb-6">
        <Image
          src={item.image}
          alt={item.description || "news"}
          width={213} 
          height={158}
          className="w-53.25 h-39.5"
        />
      </div>

      <p className="text-[18px] leading-[160%] text-black">
        {item.description}
      </p>

      <div className="flex items-center gap-3.25 mt-6">
        <SergeiIcon />
        <span className="text-[18px] leading-[160%] text-black">
          Сергей
        </span>
      </div>

    </div>
  )
}

export default NewsItem