import {  GalleryType } from '@/@types/mainTypes'
import Image from 'next/image'

const galleryItem = ({ item }:{item: GalleryType}) => {
  return (
    <Image src={`https://anorkhulov.uz/${item.image}`} alt="Gallery img" width={274} height={185}/>
  )
}

export default galleryItem