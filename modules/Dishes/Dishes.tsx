import { getAll } from "@/service/getAll"
import DishesContent from "./dishedContent"

const Dishes = async() => {
  const data=await getAll("products")
const products=data.data.splice(0,4)
    return (
      <DishesContent dishes={products}/>
    )
}

export default Dishes