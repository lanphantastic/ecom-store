import Link from 'next/link'
import Image from 'next/image'
import ItemStyles from './styles/ItemStyles'
import Title from './styles/Title'
import PriceTag from './styles/PriceTag'
import { Product } from '../models/product'

interface props {
  product: Product
}

export const ProductItem: React.FC<props> = ({ product }) => {
  return (
    <ItemStyles>
      <Image
        priority={true}
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
        width={300} height={300}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{(product.price)}</PriceTag>
      <p>{product.description}</p>
      <div className="buttonList">
        <Link
          href={{
            pathname: '/update',
            query: {
              id: product.id,
            },
          }}
        >
          Edit ✏️
        </Link>
      </div>
    </ItemStyles>
  )
}

export default ProductItem
