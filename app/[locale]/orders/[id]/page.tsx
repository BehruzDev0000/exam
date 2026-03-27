"use client"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { useRouter } from "@/i18n/navigation"
import { getCookie } from "cookies-next"
import Image from "next/image"
import { ArrowLeft, CheckCircle2, Package, Users } from "lucide-react"
import { OrderItem } from "@/@types/mainTypes"
import { useGetOrderById } from "@/service/getAll"

const formatDate = (date: string) => {
  const data = new Date(date).toLocaleString('uz-UZ')
  return data
}

const OrderDetailsPage = () => {
  const params = useParams()
  const router = useRouter()
  const orderId = params.id as string

  const [mounted, setMounted] = useState(false)
  const [parsedUser, setParsedUser] = useState<any>(null)

  useEffect(() => {
    setMounted(true)
    const userCookie = getCookie("user")
    
    if (!userCookie) {
      router.push("/")
    } else {
      setParsedUser(JSON.parse(userCookie as string))
    }
  }, [router])

  const { data: order, isLoading } = useGetOrderById(orderId)

  if (!mounted || !parsedUser) return null

  if (isLoading) return <p className="text-center py-20">Yuklanmoqda...</p>

  if (!order) return <p className="text-center py-20">Buyurtma topilmadi</p>

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button 
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-6"
      >
        <ArrowLeft size={20} />
        Orqaga qaytish
      </button>

      <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">
        <div className="p-6 md:p-8 bg-gray-50 border-b flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-3">
              Buyurtma: {order.orderNumber}
            </h1>
            <p className="text-gray-500 mt-2">
              Sanasi: {formatDate(order.createdAt)}
            </p>
          </div>
          <div className="flex gap-3">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-xl flex items-center gap-2">
              <Package size={18} />
              {order.status}
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 font-bold rounded-xl flex items-center gap-2">
              <CheckCircle2 size={18} />
              {order.paymentStatus}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 text-gray-600 mb-6 bg-gray-50 p-4 rounded-xl inline-flex">
            <Users size={20} />
            <span className="font-medium">Mehmonlar soni: {order.guestCount} kishi</span>
          </div>

          <h3 className="text-xl font-bold mb-4">Mahsulotlar</h3>
          <div className="space-y-4">
            {order.items?.map((item: OrderItem) => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-xl overflow-hidden">
                    <Image 
                      src={`https://anorkhulov.uz/${item.product.image}`}
                      alt={item.productName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{item.productName}</h4>
                    <p className="text-gray-500 text-sm">
                      {item.quantity} x {item.unitPrice}$
                    </p>
                  </div>
                </div>
                <div className="font-bold text-lg">
                  {item.totalPrice}$
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-6 max-w-sm ml-auto">
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-500">Oraliq summa:</span>
              <span className="font-medium">{order.subtotal}$</span>
            </div>
            {Number(order.serviceFee) > 0 && (
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-500">Xizmat haqi:</span>
                <span className="font-medium">{order.serviceFee}$</span>
              </div>
            )}
            <div className="flex justify-between items-center text-xl font-bold mt-4 pt-4 border-t">
              <span>Jami:</span>
              <span>{order.totalAmount}$</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetailsPage