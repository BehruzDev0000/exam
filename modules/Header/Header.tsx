"use client"

import {
  MailIcon,
  PhoneIcon,
  UserIcon,
} from "@/public/icons"
import Button from "@/components/Button"
import { useTranslations } from "next-intl"
import LanguageSelect from "@/components/LanguageSelect"
import { getCookie, deleteCookie } from "cookies-next/client"
import { Link, useRouter } from "@/i18n/navigation"
import { useEffect, useState } from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const Header = () => {
  const t = useTranslations("Header")
  const router = useRouter()

  const [mounted, setMounted] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    setMounted(true)

    const data = getCookie("user")

    if (data) {
      try {
        setUser(JSON.parse(data as string))
      } catch {
        setUser(null)
      }
    }
  }, [])

  const handleLogout = () => {
    deleteCookie("user")
    deleteCookie("token")
    setUser(null)
    router.push("/auth/sign-in")
    router.refresh()
  }

  if (!mounted) return null

  return (
    <div className="containers">
      <div className="flex items-center justify-between py-2.75">
        <div className="flex items-center gap-6.75">
          <a href="tel:+99890758383833" className="flex items-center gap-3 text-black">
            <PhoneIcon />
            +998(90)758383833
          </a>

          <a href="mailto:info@bmgsoft.com" className="flex items-center gap-2.75 text-black">
            <MailIcon />
            info@bmgsoft.com
          </a>
        </div>

        <div className="flex items-center gap-8.75">
          <LanguageSelect />

          {user?.user?.username ? (
            <Popover>
              <PopoverTrigger asChild>
                <div>
                  <Button extraStyle="py-[3px]! px-[8px]! text-white gap-[6px]! text-[10px]">
                    <UserIcon />
                    <span>{user.user.username}</span>
                  </Button>
                </div>
              </PopoverTrigger>

              <PopoverContent
                side="bottom"
                align="end"
                sideOffset={8}
                className="w-[160px] rounded-xl p-2"
              >
                <button
                  onClick={handleLogout}
                  className="w-full rounded-lg px-3 py-2 text-left text-sm font-bold hover:bg-gray-100"
                >
                  Log out
                </button>
              </PopoverContent>
            </Popover>
          ) : (
            <Button extraStyle="py-[3px]! px-[8px]! text-white gap-[6px]! text-[10px]">
              <UserIcon />
              <Link href="/auth/sign-in">{t("SignIn")}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header