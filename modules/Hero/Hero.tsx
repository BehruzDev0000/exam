"use client"
import Navbar, { Item } from '@/components/Navbar'
import { Link } from '@/i18n/navigation'
import { ArrowIcon, BasketIcon, HeartIcon, Logo } from "@/public/icons"
import Button from '@/components/Button'
import Image from 'next/image'
import {useTranslations} from 'next-intl'
import HeroMenu from '@/components/heroMenu'

const Hero = () => {
  const t = useTranslations('Hero')
    
  return (
    <section className='hero-section'>
<div className="containers mt-7.5! pt-13.75! px-17! pb-25! bg-[linear-gradient(180deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_100%)] rounded-[50px]">
      <HeroMenu/>
      <div className="flex items-center justify-between mt-14.25!">
        <div className="max-w-83">
          <h2 className="text-[64px] leading-[150%] text-black uppercase">{t('title')}</h2>
          <Button extraStyle="mt-[17px]!">
              {t('menuButton')}
            <ArrowIcon/>
            </Button>
        </div>
        <Image src={'/images/hero-img.png'} width={609} height={262} alt="Luxury"/>
      </div>
      
    </div>
    </section>
    
  )
}

export default Hero