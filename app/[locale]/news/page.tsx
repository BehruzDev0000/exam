import { getAll } from "@/service/getAll"
import NewsPageContent from "./NewsPageContent"

const News = async () => {
  const news = await getAll("news")
  const gallery = await getAll("galleries")

  return <NewsPageContent news={news} gallery={gallery} />
}
export default News
