import { getSingleProduct } from "@/service/getAll"
import SingleProduct from "./SingleProduct"

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  

  const item = await getSingleProduct(id)

  return <SingleProduct item={item} />
}

export default SingleProductPage