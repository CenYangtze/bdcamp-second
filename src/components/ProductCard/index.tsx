import { Card, Button, Tag, Space } from '@arco-design/web-react'
import type { Product } from '../../types'
import { useCartStore } from '../../store/cartStore'
import './index.css'

interface ProductCardProps {
  product: Product
  onViewDetail?: (id: number) => void
}

export const ProductCard = ({ product, onViewDetail }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem)

  const handleAddToCart = (e: Event) => {
    e.stopPropagation()
    addItem({
      id: Date.now(),
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    })
  }

  const handleViewDetail = () => {
    onViewDetail?.(product.id)
  }

  return (
    <Card
      hoverable
      className="product-card"
      cover={
        <div className="product-image-wrapper">
          <img src={product.image} alt={product.name} className="product-image" />
          {product.originalPrice && (
            <Tag color="red" className="discount-tag">
              特惠
            </Tag>
          )}
        </div>
      }
    >
      <div className="product-info">
        <div className="product-name" title={product.name}>
          {product.name}
        </div>
        
        <div className="product-price-wrapper">
          <span className="product-price">¥{product.price}</span>
          {product.originalPrice && (
            <span className="product-original-price">¥{product.originalPrice}</span>
          )}
        </div>

        <div className="product-meta">
          <span>已售 {product.sales}</span>
          {product.rating && <span>⭐ {product.rating}</span>}
        </div>

        <Space className="product-actions" size="small">
          <Button
            type="primary"
            onClick={handleAddToCart}
          >
            🛒 加购
          </Button>
          <Button
            type="outline"
            onClick={handleViewDetail}
          >
            👁️ 详情
          </Button>
        </Space>
      </div>
    </Card>
  )
}