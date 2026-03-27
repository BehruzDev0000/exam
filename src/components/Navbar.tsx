import {Link} from '@/i18n/navigation'
import { FC } from "react"

export interface Item {
  id: number
  title: string
  href:string
}

interface NavbarProps {
  items: Item[]
}

const Navbar: FC<NavbarProps> = ({ items }) => {
  return (
    <nav className="flex gap-10.75 items-center">
      {items.map((item) => (
        <Link href={item.href} key={item.id}>{item.title}</Link>
      ))}
    </nav>
  )
}

export default Navbar