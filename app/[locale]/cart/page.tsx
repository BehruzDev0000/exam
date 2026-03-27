"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { getCookie } from "cookies-next"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { Trash2, Plus, Minus, Users } from "lucide-react"
import HeroMenu from "@/components/heroMenu"
import { getCartData, updateCartItem, deleteCartItem, checkoutCart } from "@/service/getAll"
import { useRouter } from "@/i18n/navigation"

const CartPage = () => {
  const router=useRouter()
  const queryClient = useQueryClient()
  const [guestCount, setGuestCount] = useState(1)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const userCookie = getCookie("user")
  const parsedUser = userCookie ? JSON.parse(userCookie as string) : null

  const { data: cartData, isLoading } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const result = await getCartData(parsedUser?.user.id)
      return result.data
    },
    enabled: !!parsedUser
  })

  if (!mounted) return null

  if (!parsedUser) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h2 className="text-2xl font-bold">Iltimos, avval tizimga kiring</h2>
      </div>
    )
  }

  const updateQuantity = async (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) return

    try {
      await updateCartItem(itemId, newQuantity)
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    } catch (error) {
      toast.error("Miqdorni yangilab bo'lmadi")
    }
  }

  const removeItem = async (itemId: number) => {
    try {
      await deleteCartItem(itemId)
      toast.success("O'chirildi")
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    } catch (error) {
      toast.error("O'chirishda xatolik")
    }
  }

  const handleCheckout = async () => {
    try {
      await checkoutCart(guestCount)
      toast.success("Buyurtma rasmiylashtirildi!", { icon: "🎉" })
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      router.push('/orders')
    } catch (error) {
      toast.error("Xatolik yuz berdi")
    }
  }

  if (isLoading) return <p className="text-center py-20">Yuklanmoqda...</p>

  const items = cartData?.items || []

  return (
    <div className="containers mt-7.5! pt-13.75! px-17! pb-25! bg-[linear-gradient(180deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_100%)] rounded-[50px] !mb-[71px] pb-[71px]">
      <HeroMenu />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Savat</h1>

        {items.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-3xl">
            <p className="text-xl text-gray-500">Savat bo'sh. Mahsulot qo'shing!</p>
          </div>
        ) : (
          <div className="grid gap-6">
            <div className="space-y-4">
              {items.map((item: any) => (
                <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden">
                      <Image 
                        src={`https://anorkhulov.uz/${item.product.image}`} 
                        alt={item.product.name} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.product.name}</h3>
                      <p className="text-gray-500">{item.unitPrice}$</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 bg-gray-100 p-1 rounded-lg">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-white rounded transition-all"
                      >
                        <Minus size={18} />
                      </button>
                      <span className="font-bold min-w-[20px] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-white rounded transition-all"
                      >
                        <Plus size={18} />
                      </button>
                    </div>

                    <p className="font-bold w-16 text-right">{item.totalPrice}$</p>
                    
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-all"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-900 text-white p-8 rounded-[38px]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Users size={24} />
                  <span className="text-lg">Mehmonlar soni:</span>
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                    className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="text-xl font-bold">{guestCount}</span>
                  <button 
                    onClick={() => setGuestCount(guestCount + 1)}
                    className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 flex justify-between items-center">
                <div>
                  <p className="text-gray-400">Jami summa:</p>
                  <h2 className="text-3xl font-bold">{cartData?.subtotal}$</h2>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="bg-white text-black px-10 py-4 rounded-2xl font-bold hover:bg-gray-200 transition-all"
                >
                  Rasmiylashtirish
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartPage