"use client"
import Button from "@/components/Button"
import { useRouter } from "@/i18n/navigation"
import { SignUp } from "@/service/getAll"
import { useMutation } from "@tanstack/react-query"
import toast, { Toaster } from "react-hot-toast"
import { SubmitEvent } from "react"


const Register = () => {
  const router=useRouter()
  const mutation=useMutation({
    mutationFn:async (data:{lastName:string,firstName:string,email:string,username:string,password:string})=>{
      return await SignUp(data)
    },
    onSuccess:() => {
      
      toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz")
      setTimeout(() => {
        router.push("/sign-in")
      }, 1000)
    },
    onError:() => {
      toast.error("Xato")
    }
  })
  const handleSignUp = (e:SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data={
      lastName: e.target.lastName.value,
      firstName: e.target.firstName.value,
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
    }
    if(!data.lastName || !data.firstName || !data.email ||!data.username || !data.password){
      toast.error("Iltimos barcha maydonlarni to'ldiring")
      return
    }
    mutation.mutate(data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6f6b63] to-[#c9bba3]">
      

      <form onSubmit={handleSignUp}
        className=" w-[463px] rounded-[31px] bg-white/40 backdrop-blur-xl px-[54px] pb-[41px] pt-[63px] shadow-lg flex flex-col"
      >

        <h2 className="text-[32px] mb-[37px] text-black leading-[150%] text-center">
         Зарегистрироваться
        </h2>
        <div className="mb-[41px]">
          <p className="text-[#585858] text-[16px] mb-[10px]">
            Ваше имя 
          </p>
          <input
            name="firstName"
            type="text"
            className="w-full bg-transparent border-b border-black outline-none py-2"
          />
        </div>
         <div className="mb-[41px]">
          <p className="text-[#585858] text-[16px] mb-[10px]">
            Ваше фамилия 
          </p>
          <input
            name="lastName"
            type="text"
            className="w-full bg-transparent border-b border-black outline-none py-2"
          />
        </div>
         <div className="mb-[41px]">
          <p className="text-[#585858] text-[16px] mb-[10px]">
            Ваша электрон почта 
          </p>
          <input
            name="email"
            type="email"
            className="w-full bg-transparent border-b border-black outline-none py-2"
          />
        </div>
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
        <div className="flex items-start gap-[5px] w-full pr-[36px] mt-[12px]">
            <input type="checkbox" className="border border-[#454545] "/>
          <span className="text-[#000000] text-[12px] leading-[150%]">Я прочитал и принял Политику конфиденциальности и Условия*</span>
          </div>
        
        <div className="flex justify-center mt-[27px]">
          <Button type="submit">
          Вход в аккаунт
          </Button>
        </div>
          
        <p className="text-center mt-[7px] text-[#06004C] text-[12px] leading-[150%] cursor-pointer">
          Еще нет учетной записи?
        </p>

      </form>
    </div>
  )
}

export default Register