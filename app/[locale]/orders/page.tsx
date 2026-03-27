import OrderPageContent from "./orderPageContent"
import { getOrders } from "@/service/getAll"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const OrdersPage = async () => {
  const cookieStore = await cookies()
  const userCookie = cookieStore.get("user")?.value

 
  if (!userCookie) {
    redirect('/') 
  }


  let token = ""
  try {
    const parsedUser = JSON.parse(userCookie)
    token = parsedUser?.accessToken || ""
    
    if (!parsedUser?.user?.id) {
      redirect('/')
    }
  } catch (error) {
    redirect('/')
  }

  const res = await getOrders()
  
  const orderList = Array.isArray(res?.data) 
    ? res.data.filter(Boolean) 
    : (res?.data ? [res.data] : [])

  return <OrderPageContent orders={orderList} />
}

export default OrdersPage