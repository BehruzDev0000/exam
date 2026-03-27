"use client"

import Image from "next/image"
import { FoodIcon } from "@/../public/icons"
import { useTranslations } from "next-intl"

const Booking = () => {

    const t = useTranslations("booking")

    return (
        <div className="containers flex items-center justify-between mt-70! pb-23.5">
            <div className="w-115 rounded-3xl bg-white/40 p-8">
                <div className="w-31.5 h-31.5 rounded-full bg-black flex items-center justify-center text-white text-3xl -mt-16 mb-6 shadow-[0_0_0_10px_rgba(255,255,255,0.4)]">
                    <FoodIcon />
                </div>
                <h2 className="text-3xl font-semibold mb-8">
                    {t("title")}
                </h2>
                <div className="mb-6 border-b border-black pb-2">
                    <input
                        type="text"
                        placeholder={t("phone")}
                        className="w-full bg-transparent outline-none text-gray-700 placeholder:text-[#585858]"
                    />
                </div>
                <div className="mb-6 border-b border-black pb-2 flex items-center justify-between">
                    <select className="w-full bg-transparent outline-none text-gray-700">
                        <option>{t("people")}</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <div className="mb-6 border-b border-black pb-2 flex items-center justify-between">
                    <input
                        type="date"
                        className="w-full bg-transparent outline-none text-gray-700"
                    />
                </div>
                <div className="mb-6 border-b border-black pb-2 flex items-center justify-between">
                    <input
                        type="time"
                        className="w-full bg-transparent outline-none text-gray-700"
                    />
                </div>
                <div className="mb-3 border-b border-black pb-2 flex items-center justify-between">
                    <select className="w-full bg-transparent outline-none text-gray-700">
                        <option>{t("place")}</option>
                        <option>Hall</option>
                        <option>Terrace</option>
                    </select>
                </div>
                <p className="text-sm text-blue-600 mb-8 cursor-pointer">
                    {t("map")}
                </p>
                <button className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-900 transition">
                    {t("button")}
                </button>
            </div>
            <Image
                src={'/images/pizza.png'}
                width={580}
                height={500}
                alt="pizza"
            />
        </div>
    )
}

export default Booking