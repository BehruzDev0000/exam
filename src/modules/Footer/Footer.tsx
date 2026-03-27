"use client"

import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { FaceBookIcon, InstagramIcon, Logo, TelegramIcon, WhatsAppIcon } from "@/../public/icons"

const Footer = () => {

    const t = useTranslations("Footer")

    return (
        <div className="containers flex items-start pb-17.75!">
            <div className="flex flex-col items-start pt-14.5 w-34">
                <Logo/>
                <div className="mt-2.5 flex items-center gap-2.5">
                    <Link href="/"><TelegramIcon/></Link>
                    <Link href="/"><WhatsAppIcon/></Link>
                    <Link href="/"><FaceBookIcon/></Link>
                    <Link href="/"><InstagramIcon/></Link>
                </div>
            </div>
            <div className="flex items-start pt-19 ml-39.75">
                <div className="flex flex-col w-40.5">
                    <h3 className="text-black text-[25px]">
                        {t("services.title")}
                    </h3>
                    <div className="flex flex-col gap-1.75 mt-3">
                        <Link href="/" className="text-[16px] leading-[150%] text-black">
                            {t("services.price")}
                        </Link>
                        <Link href="/" className="text-[16px] leading-[150%] text-black">
                            {t("services.tracking")}
                        </Link>
                        <Link href="/" className="text-[16px] leading-[150%] text-black">
                            {t("services.report")}
                        </Link>
                        <Link href="/" className="text-[16px] leading-[150%] text-black">
                            {t("services.terms")}
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col w-47.5 ml-44.75!">
                    <h3 className="text-black text-[25px]">
                        {t("company.title")}
                    </h3>
                    <div className="flex flex-col gap-1.75 mt-3">
                        <Link href="/" className="text-[16px] leading-[150%] text-black">
                            {t("company.reports")}
                        </Link>
                        <Link href="/" className="text-[16px] leading-[150%] text-black">
                            {t("company.contact")}
                        </Link>
                        <Link href="/" className="text-[16px] leading-[150%] text-black">
                            {t("company.management")}
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col w-39.5 ml-47.5!">
                    <h3 className="text-black text-[25px]">
                        {t("address.title")}
                    </h3>
                    <div className="flex flex-col gap-1.75 mt-3">
                        <p className="text-[16px] leading-[150%] text-black">
                            {t("address.location")}
                        </p>
                        <p className="text-[16px] leading-[150%] text-black">
                            {t("address.street")}
                        </p>
                        <p className="text-[16px] leading-[150%] text-black">
                            +99894848844848
                        </p>
                        <p className="text-[16px] leading-[150%] text-black">
                            info@bmgsoft.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer