import { Product } from "@/@types/mainTypes"
import HeroMenu from "@/components/heroMenu"
import { Link } from "@/i18n/navigation"
import { RatingIcon } from "@/public/icons"
import { useTranslations } from "next-intl"
import Image from "next/image"

const SingleProduct = ({item}:{item:Product}) => {
    const t=useTranslations("Menu")
    
    
  return (
    <div className="containers mt-7.5! pt-13.75! px-17! pb-25! bg-[linear-gradient(180deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_100%)] rounded-[50px] !mb-[71px] pb-[71px]">

      <HeroMenu />

      <h2 className="text-[#626464] text-[18px] leading-[150%] mt-[107px]">
        <Link href={'/'}>
        {t("page")} 
        </Link> {`>`} <Link href={'/menu'}>{t("title")}</Link> {`>`} <span className="text-black">{item.name}</span>
      </h2>
      <div className="mt-[33px] relative">
        <h2 className="text-black text-[48px] text-center leading-[150%]">{item.name}</h2>
       <div className="flex items-center justify-between">
         <Image src={'https://anorkhulov.uz/' + item.image} alt={item.name} width={719} height={719} objectFit="cover" />
         <div className="w-[581px]">
            <h3 className="text-[40px] leading-[150%] text-black">{item.name}</h3>
           <div className="flex items-center gap-2 mt-[15px]">
             <span className="text-[32px] text-black">{item.price}{`.00$`}</span>
             <RatingIcon/>
             <span>{item.rating}</span>
             <span className="text-[24px] text-[#6D6D6D]">(Смотреть отзывы)</span>
           </div>
           <h3 className="mt-[43px] text-black text-[32px]">Описание:</h3>
           <p className="text-[22px]">
            {item.description}
           </p>
         </div>
       </div>
      </div>
      </div>
  )
}

export default SingleProduct