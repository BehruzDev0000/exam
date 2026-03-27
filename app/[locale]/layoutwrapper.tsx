"use client"

import { usePathname } from '@/i18n/navigation'
import Header from '@/modules/Header/Header'
import Footer from '@/modules/Footer/Footer'
import { Toaster } from 'react-hot-toast'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  const hideLayout =
    pathname.includes("/auth/sign-in") || pathname.includes("/auth/sign-up")

  return (
    <>
      {!hideLayout && <Header />}
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      {children}
      {!hideLayout && <Footer />}
    </>
  )
}

export default LayoutWrapper