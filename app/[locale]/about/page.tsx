import Button from "@/components/Button"
import HeroMenu from "@/components/heroMenu"
import TeamMember from "@/components/TeamMember"
import { Link } from "@/i18n/navigation"
import NewsModule from "@/modules/News/News"
import { ArrowIcon } from "@/public/icons"
import { useTranslations } from "next-intl"
import Image from "next/image"

const About = () => {
  const t = useTranslations("about")
  return (
    <div>
      <div className="containers mt-7.5! pt-13.75! px-17! pb-25! bg-[linear-gradient(180deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_100%)] rounded-[50px] !mb-[71px] pb-[71px]">
      <HeroMenu/>  

    
      <h2 className="text-[#626464] text-[18px] leading-[150%] mt-[107px]">
        {t("page")} / <span className="text-black">{t("title")}</span>
      </h2>
      <div className="mt-[31px]">
        <h2 className="text-center text-[48px] leading-[150%] text-black">{t("title")}</h2>
        <p className="whitespace-pre-line mt-[42px] text-[20px] leading-[150%] text-[#0000000]">{t("description")}</p>
      </div>
      <div className="mt-[95px] flex items-center justify-between">
        <div className="w-[564px]">
          <h3 className="leading-[150%] text-[40px] text-[#000000]">{t("ourFoodTitle")}</h3>
          <p className="whitespace-pre-line mt-[44px] text-[20px] leading-[150%] text-[#000000]">{t("ourFoodDesc")}</p>
          <Button extraStyle="mt-[49px]">
           <Link href="/menu" className="flex items-center gap-[10px]">
            <span >{t("aboutButton")}</span>
           <ArrowIcon/>
           </Link>
          </Button>
        </div>
        <Image src={'/images/our-food.png'} alt="our food" width={503} height={676} className="rounded-[35px]"/>
      </div>
      <div className="flex items-center justify-between mt-[105px]">
        <Image src={'/images/our-path.png'} alt="our path" width={503} height={676} className="rounded-[35px]"/>
        <div className="w-[564px]">
          <h3 className="leading-[150%] text-[40px] text-[#000000]">{t("ourPathTitle")}</h3>
          <p className="whitespace-pre-line mt-[44px] text-[20px] leading-[150%] text-[#000000]">{t("ourPathDesc")}</p>
        </div>
      </div>
      <div className="mt-[57px]">
        <h3 className="text-[#000000] text-center text-[48px] leading-[150%]">{t("ourTeamTitle")}</h3>
        <div className="flex items-center gap-x-[125px] gap-y-[81px] justify-center flex-wrap mt-[40px]">
          <TeamMember name="Александр Петро" role={t("ourHeadChef")} img="/images/aleksandr-petro.png"/>
          <TeamMember name="Александр Петро" role={t("ourAssistentChef")} img="/images/aleksandr-petro-2.png"/>
          <TeamMember name="Александр Петро" role={t("ourBurgerKing")} img="/images/aleksandr-petro-3.png"/>
          <TeamMember name="Жулия Виллиам" role={t("ourWaitress")} img="/images/julia-william.png"/>
          <TeamMember name="Жулия Виллиам" role={t("ourWaitress")} img="/images/julia-william-2.png"/>
          <TeamMember name="Жулия Виллиам" role={t("ourWaitress")} img="/images/julia-william-3.png"/>
        </div>
      </div>
    </div>
    <NewsModule/>
    </div>
  )
}

export default About