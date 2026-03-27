import { ContactData, OrderItem } from "@/@types/mainTypes"
import { getCookie } from "cookies-next/client"
import { useQuery } from "@tanstack/react-query"
import toast from "react-hot-toast"

const BASEURI = process.env.NEXT_PUBLIC_API_URL
const token = getCookie("user")
const parsed = token ? JSON.parse(token as string) : null

const getAll = async (URI: string) => {
  let token = ""

  try {
    token = parsed ? parsed.accessToken : ""
  } catch {
    token = ""
  }

  const res = await fetch(`${BASEURI}/${URI}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  })

  if (!res.ok) {
    throw new Error("Malumot olishda xatolik")
  }

  return await res.json() 
}

const SignIn = async (body: { username: string; password: string }) => {
  const res = await fetch(`${BASEURI}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error("SignIn xato")
  }

  return await res.json()
}
const getSingleProduct = async (id: string|number) => {
  try {
    const res = await fetch(`${BASEURI}/products/${id}`, {
      headers: {
        Authorization: parsed ? `Bearer ${parsed?.accessToken}` : "",
      },
    })
    
    if (!res.ok) {
      console.log("Malumot olishda xatolik")
    }
    const item=await res.json()
    return await item.data
  } catch (error) {
    console.log(error)
  }
}
const getProductByCategoryId = async (id: string) => {
  let token = ""
  try {
    token = parsed ? parsed.accessToken : ""
  } catch {
    token = ""
  }

  const res = await fetch(`${BASEURI}/products?categoryId=${id}`, {
    headers: {
      Authorization: parsed ? `Bearer ${token}` : "",
    },
  })
  
  if (!res.ok) {
    console.log("Malumot olishda xatolik")
  }
  
  return await res.json()
}

const SignUp = async (body: { lastName: string; firstName: string; email: string; username: string; password: string }) => {
  const res = await fetch(`${BASEURI}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  
  if (!res.ok) {
    throw new Error("SignUp xato")
  }
  
  return await res.json()
}

const SendContactMessage = async ({ data }: { data: ContactData }) => {
  try {
    const res = await fetch(`${BASEURI}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const getOrders = async () => {
  try {
    const res = await fetch(`${BASEURI}/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${parsed?.accessToken}`,
      }
    })
    
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

const getOrderById = async (orderId: string | number) => {
 try {
   const res = await fetch(`${BASEURI}/orders/${orderId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${parsed?.accessToken}`,
    },
  })
  
  return await res.json()
 } catch (error) {
    console.log(error)
 }
}

const useGetOrderById = (orderId: string) => {
  return useQuery({
    queryKey: ['order', orderId],
    queryFn: async () => {
      const result = await getOrderById(orderId)
      return result?.data
    },
    enabled: !!parsed?.accessToken && !!orderId
  })
}

const getCartData = async (userId: string | number) => {
  try {
    const res = await fetch(`${BASEURI}/cart/current?userId=${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${parsed?.accessToken}`
    }
  })
  return await res.json()
  } catch (error) {
    console.log(error)
  }
}

const updateCartItem = async (itemId: number, quantity: number) => {
  try {
    const res = await fetch(`${BASEURI}/cart/items/${itemId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${parsed?.accessToken}`
    },
    body: JSON.stringify({ quantity })
  })
  if (!res.ok) throw new Error("Error")
  return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteCartItem = async (itemId: number) => {
  try {
    const res = await fetch(`${BASEURI}/cart/items/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${parsed?.accessToken}`
    }
  })
  if (!res.ok) throw new Error("Error")
  return res.json()
  } catch (error) {
    console.log(error)
  }
}

const checkoutCart = async ( guestCount: number) => {
 try {
   const res = await fetch(`${BASEURI}/cart/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${parsed.accessToken}`
    },
    body: JSON.stringify({ userId: parsed.user.id, guestCount })
  })
  if (!res.ok) throw new Error("Error")
  return res
 } catch (error) {
  
 }
}
const checkOutBasket=async()=>{
    try {
      const res = await fetch(`${BASEURI}/cart/current?userId=${parsed?.user.id}`, {
        headers: { Authorization: `Bearer ${parsed?.accessToken}` }
      })
      return res.json()
    } catch (error) {
      console.log(error)
    }
}
const addToBasket=async (id:string|number)=>{
      const result=await checkOutBasket()
      const cartItems = result.data?.items || []

      const isExist = cartItems.find((cartItem: OrderItem) => cartItem.product.id === id)

      if (isExist) return toast.error("Ushbu mahsulot savatda bor")

     try {
      
       const create = await fetch(`${BASEURI}/cart/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsed?.accessToken}`
        },
        body: JSON.stringify({
          userId: parsed?.user.id,
          productId: id,
          quantity: 1
        })
      })
      return create
     } catch (error) {
      console.log(error)
     }
}
const getTables = async () => {
  try {
    const res = await fetch(`${BASEURI}/restaurant-tables`, {
      headers: { Authorization: `Bearer ${parsed?.accessToken}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}
const createReservation=async(email:string, reservationDate:string, reservationTime:string, guestCount:number, tableId:number)=>{
  try {
    if(parsed.accessToken){
      const res=await fetch(`${BASEURI}/reservations/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsed?.accessToken}`
        },
        body: JSON.stringify({
          email,
          reservationDate,
          reservationTime,
          guestCount,
          tableId
        })
      })
      if(res.ok){
        toast.success("Muvaffaqiyatli o'zlashtirildi")
        return res.json()
      }
    }
    else{
      toast.error("Iltimos tizimga kiring")
    }
   
  } catch (error) {
    console.log(error)
  }
}
export {
  createReservation,
  getTables,
  addToBasket,
  checkOutBasket,
  checkoutCart,
  getCartData,
  updateCartItem,
  deleteCartItem,
  getAll,
  SignIn,
  getProductByCategoryId,
  getSingleProduct,
  SignUp,
  SendContactMessage,
  getOrders,
  getOrderById,
  useGetOrderById
}