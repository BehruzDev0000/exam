import { getAll } from "@/service/getAll"
import DishesContent from "./dishedContent"

const Dishes = async() => {
  try {
    const { data } = await getAll("products")
    return <DishesContent dishes={data.slice(0, 4)} />
  } catch (error) {
    console.error("Could not load dishes", error)
    return <p role="status" className="py-6 text-center">Menyu vaqtincha yuklanmadi.</p>
  }
}

export default Dishes
