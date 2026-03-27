"use client"
import { ContactData } from "@/@types/mainTypes"
import Button from "@/components/Button"
import HeroMenu from "@/components/heroMenu"
import InputContact from "@/components/InputContact"
import { Link } from "@/i18n/navigation"
import { CallIcon, MapIcon, MessageIcon } from "@/public/icons"
import { SendContactMessage } from "@/service/getAll"
import { useTranslations } from "next-intl"
import { SubmitEvent } from "react"
import toast from "react-hot-toast"


const Contacts = () => {
  const handleSendMessage=(e:SubmitEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const data: ContactData = {
      name: e.target.username.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }
  try {
    SendContactMessage({ data })
    toast.success("Xabaringiz yuborildi")
  } catch (error) {
    toast.error("Xatolik yuz berdi, qayta urinib chiqing")
  }    
  finally{
    e.target.reset()
  }
  }
  const t=useTranslations("contact")
  return (
    <div className="containers mt-7.5! pt-13.75! px-17! pb-25! bg-[linear-gradient(180deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_100%)] rounded-[50px] !mb-[71px] pb-[71px]">
      <HeroMenu/>
        <h2 className="text-[#626464] text-[18px] leading-[150%] mt-[107px]">
        {t("page")} / <span className="text-black">{t("title")}</span>
      </h2>
      <div className="mt-[31px]">
        <h2 className="text-center text-[48px] leading-[150%] text-[#000000]">{t("title")}</h2>
        <div className="flex items-center justify-center mt-[83px] gap-[155px]">
      <div className="w-[167px] h-[164px] flex flex-col items-center justify-center text-center">
      <MessageIcon/>
      <h3 className="mt-[27px]">{t("write")}</h3>
        <Link href={'mailto:info@bmgsoft.com'} className="mt-[2px]">info@bmgsoft.com</Link>
        <Link href={'https://t.me/bmgsoft_com'}>t.me/bmgsoft.com</Link>
        </div>
        <div className="w-[167px] h-[164px] flex flex-col items-center justify-center text-center">
      <CallIcon/>
      <h3 className="mt-[27px]">{t("call")}</h3>
        <Link href={'tel:+9998908767888'} className="mt-[2px]">+9998908767888</Link>
        <Link href={'tel:+9989865332322'}>+9989865332322</Link>
        </div>
        <div className="w-[167px] h-[164px] flex flex-col items-center justify-center text-center">
      <MapIcon/>
      <h3 className="mt-[27px]">{t("visit")}</h3>
       <p>{t("address")}</p>
        </div>
        </div>
      </div>
      <div className="mt-[76px]">
      <h2 className="text-[48px] text-[#000000] leading-[150%] text-center">{t("write")}</h2>
      <div className="max-w-[804px] mx-auto mt-[61px]">
      <form className="flex flex-col items-center gap-[20px]" onSubmit={handleSendMessage}>
        <InputContact text={t("name")} name="username"/>
        <InputContact text={t("email")} name="email"/>
        <InputContact text={t("phone")} name="phone"/>
        <InputContact text={t("message")} name="message"/>
        <Button extraStyle="ml-auto mt-[31px]" type="submit">{t("send")}</Button>
      </form>
      </div>
      </div>
    </div>
  )
}

export default Contacts