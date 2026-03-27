"use client"
import { Order } from "@/@types/mainTypes"
import { Link } from "@/i18n/navigation"
import { ArrowRight, Package, Clock } from "lucide-react"
import { useEffect, useState } from "react"

const formatDate = (date: string) => {
  const data=new Date(date).toLocaleString('uz-UZ')
  return data
}

const OrderPageContent = ({ orders }: { orders: Order[] }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Mening buyurtmalarim</h1>

      {!orders || orders.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-3xl">
          <Package className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <p className="text-xl text-gray-500">Sizda hali buyurtmalar yo'q</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {orders.map((order: Order) => (
            <div key={order.id} className="bg-white p-6 rounded-2xl shadow-sm border flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-lg">{order.orderNumber}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                    {order.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    <span suppressHydrationWarning>
                      {mounted ? formatDate(order.createdAt) : "Yuklanmoqda..."}
                    </span>
                  </span>
                  <span>*</span>
                  <span>Mehmonlar: {order.guestCount}</span>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-none">
                <div className="text-right">
                  <p className="text-sm text-gray-500">Jami summa</p>
                  <p className="font-bold text-xl">{order.totalAmount}$</p>
                </div>
                <Link 
                  href={`/orders/${order.id}`}
                  className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-all"
                >
                  Batafsil
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default OrderPageContent