"use client"

import { useState } from "react"
import { usePathname, useRouter } from "@/i18n/navigation"
import { useLocale } from "next-intl"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const languages = [
    { code: "uz", label: "O‘zbek", flag: "/images/uz-flag.jpg" },
    { code: "ru", label: "Русский", flag: "/images/ru-flag.png" },
    { code: "en", label: "English", flag: "/images/en-flag.png" }
]

const LanguageSelect = () => {
    const [open, setOpen] = useState(false)

    const locale = useLocale()
    const pathname = usePathname()
    const router = useRouter()

    const current = languages.find(l => l.code === locale)

    const changeLanguage = (lang: string) => {
        router.replace(pathname, { locale: lang as "uz" | "ru" | "en" })
        setOpen(false)
    }

    return (
        <div className="relative z-50">

            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 bg-white px-3 py-1 rounded-md shadow hover:bg-gray-100 transition cursor-pointer"
            >
                <Image src={current!.flag} alt={current!.label} width={20} height={14}/>
                <span className="text-sm font-medium">{current?.code.toUpperCase()}</span>
                <ChevronDown size={16} className={`transition ${open ? "rotate-180" : ""}`} />
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg z-50 overflow-hidden">

                    {languages.map(lang => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100 transition cursor-pointer"
                        >
                            <Image src={lang.flag} alt={lang.label} width={20} height={14}/>
                            <span>{lang.label}</span>
                        </button>
                    ))}

                </div>
            )}

        </div>
    )
}

export default LanguageSelect