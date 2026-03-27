"use client"

import Button from "@/components/Button"
import { FoodIcon } from "@/public/icons"
import { SignIn } from "@/service/getAll"
import { useMutation } from "@tanstack/react-query"
import {  SubmitEvent } from "react"
import toast from "react-hot-toast"
import { setCookie } from "cookies-next"
import { Link, useRouter } from "@/i18n/navigation"

const Login = () => {
const router=useRouter()
  const mutation = useMutation({
    mutationFn: async (data: { username: string; password: string }) => {
      return await SignIn(data)
    },

    onSuccess: (data) => {
      setCookie("user", JSON.stringify(data.data))
     
      toast.success("Muvaffaqiyatli kirdingiz!")
      setTimeout(() => {
        router.push("/menu")
      }, 1000)
    },

    onError: (error: any) => {
      toast.error(error?.message || "SignIn xato!")
    },
  })

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()


    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    }

    if (!data.username || !data.password) {
      toast.error("Barcha maydonlarni to‘ldiring")
      return
    }

    mutation.mutate(data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6f6b63] to-[#c9bba3]">
      

      <form 
        onSubmit={handleSubmit}
        className="relative w-[463px] rounded-[31px] bg-white/40 backdrop-blur-xl px-[54px] pb-[53px] pt-[146px] shadow-lg"
      >
        <div className="absolute top-[-37px] left-[54px] w-[126px] h-[123px] rounded-full bg-black flex items-center justify-center text-white text-3xl shadow-[0_0_0_10px_rgba(255,255,255,0.4)]">
          <FoodIcon />
        </div>

        <h2 className="text-[32px] mb-[34px] text-black leading-[150%]">
          Вход в аккаунт
        </h2>
        <div className="mb-[41px]">
          <p className="text-[#585858] text-[16px] mb-[10px]">
            Ваше имя пользователя
          </p>
          <input
            name="username"
            type="text"
            className="w-full bg-transparent border-b border-black outline-none py-2"
          />
        </div>
        <div className="mb-[8px]">
          <p className="text-[#585858] text-[16px] mb-[10px]">
            Пароль
          </p>
          <input
            name="password"
            type="password"
            className="w-full bg-transparent border-b border-black outline-none py-2"
          />
        </div>
        <p className="text-[12px] text-black leading-[150%] cursor-pointer">
          Забыли пароль?
        </p>
        <div className="flex justify-center mt-[27px]">
          <Button type="submit">
            {mutation.isPending ? "Loading..." : "Вход в аккаунт"}
          </Button>
        </div>

        <Link href={'/auth/sign-up'}>
        <p className="text-center mt-[7px] text-[#06004C] text-[12px] leading-[150%] cursor-pointer">
          Еще нет учетной записи?
        </p>
        </Link>

      </form>
    </div>
  )
}

export default Login