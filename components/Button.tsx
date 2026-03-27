import { FC, ReactNode } from "react"
interface ButtonProps{
  extraStyle?:string,
  children:ReactNode
  type?:'submit'|'button'
}
const Button:FC<ButtonProps> = ({extraStyle,children}) => {
  return (
    <button className={`${extraStyle} cursor-pointer bg-black flex items-center gap-2.5 py-4 px-3.75 text-white rounded-tl-[13px] rounded-tr-[13px] rounded-bl-[13px] leading-[150%] text-[18px]`}>
      {children}
    </button>
  )
}

export default Button