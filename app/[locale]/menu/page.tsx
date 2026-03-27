
import { getAll } from '@/service/getAll';
import MenuPageContent from './menuPageContent';
import { Category, Product } from '@/@types/mainTypes';
import { NewsCardType } from '@/modules/News/News';

const Menu = async() => {
  const { data:categories } =await getAll('categories') as {data: Category[]}
  const {data:products} =await getAll('products') as {data:Product[]}
  const {data:news} =await getAll('news') as {data:NewsCardType[]}
  return (
    <MenuPageContent categories={categories} products={products} news={news}/>
  )
}

export default Menu