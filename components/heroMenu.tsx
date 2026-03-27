"use client"
import { Link } from '@/i18n/navigation'
import { Logo } from '@/public/icons'
import Navbar, { Item } from './Navbar'
import { useTranslations } from 'next-intl'
import { ShoppingCart, Heart } from 'lucide-react'
import { getCookie } from 'cookies-next'
import { useQuery } from '@tanstack/react-query'
import { useLike } from '@/context/Context'
import { useEffect, useState } from 'react'
import { checkOutBasket } from '@/service/getAll'

const HeroMenu = () => {
  const t = useTranslations('Hero')
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => setMounted(true), [])

  const menuItems: Item[] = [
    { id: 1, title: t('navbar.menu'), href: '/menu' },
    { id: 2, title: t('navbar.news'), href: '/news' },
    { id: 3, title: t('navbar.booking'), href: '/booking' },
    { id: 4, title: t('navbar.about'), href: '/about' },
    { id: 5, title: t('navbar.contact'), href: '/contacts' },
  ]

  const { data: cartData } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const res = await checkOutBasket()
      const result = await res.json()
      return result?.data || null
    },
    enabled: !!getCookie("user"), 
  })

  const cartCount = cartData?.itemCount || 0
  
  const { likedIds } = useLike()
  const likedCount = likedIds.length

  return (
    <div className="flex items-center justify-between">
      <Link href={'/'}>
        <Logo />
      </Link>

      <Navbar items={menuItems} />

      <div className="flex items-center gap-6.5">
        <div className="relative">
            <Heart className="w-6 h-6" />
            {mounted && likedCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4.5 h-4.5 flex items-center justify-center rounded-full">
                {likedCount}
              </span>
            )}
        </div>

        <div className="relative">
          <Link href="/cart">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4.5 h-4.5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroMenu