import { CloudinaryImage_File } from './image'

export interface Product {
  id: string
  name: string
  description: string
  photo: ProductImage
  status: string
  price: number
}

export interface ProductImage {
  id: string
  image: CloudinaryImage_File
  altText: string
  product: Product
}
