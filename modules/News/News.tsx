
import { getAll } from "@/service/getAll"
import NewsContent from "./NewsContent"

export interface NewsCardType {
  id: number
  description: string
  image: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

const NewsModule=async () => {
  try {
    const { data } = await getAll("news")
    return <NewsContent filteredData={data.slice(0, 3)} />
  } catch (error) {
    console.error("Could not load news", error)
    return <p role="status" className="py-6 text-center">Yangiliklar vaqtincha yuklanmadi.</p>
  }
}

export default NewsModule
