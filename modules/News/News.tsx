
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
  const data=await getAll("news")
  const newsList=data?.data.splice(0,3)
  return <NewsContent filteredData={newsList} />
}

export default NewsModule