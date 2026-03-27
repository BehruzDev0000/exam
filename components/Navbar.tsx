"use client"

import { Link, usePathname } from "@/i18n/navigation"

export type Item = {
  id: number
  title: string
  href: string
}

const Navbar = ({ items }: { items: Item[] }) => {
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-6">
      {items.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.id}
            href={item.href}
            className={`transition text-[18px] leading-[150%] ${
              isActive
                ? "text-[#FF0000]"
                : "text-black"
            }`}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar