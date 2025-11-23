import { useState } from 'react'
import { Layout, Row, Col, Card, Button, InputNumber, Space, Breadcrumb, Image } from '@arco-design/web-react'
import { IconHome, IconShoppingCart } from '@arco-design/web-react/icon'
import { Navigation } from '../../components/Navigation'
import { SpecSelector } from '../../components/SpecSelector'
import { useCartStore } from '../../store/cartStore'
import { Product } from '../../types'
import './index.css'

const { Content } = Layout

// Mock 商品详情数据
const mockProduct: Product = {
  id: 1,
  name: 'iPhone 15 Pro Max 256GB',
  price: 9999,
  originalPrice: 10999,
  image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
  images: [
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
    'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800',
    'https://images.unsplash.com/photo-1592286927505-409e46c14270?w=800'
  ],
  category: 'digital',
  description: '全新 iPhone 15 Pro Max，配备 A17 Pro 芯片，钛金属设计，专业级相机系统。',
  stock: 100,
  sales: 1234,
  rating: 4.8,
  specs: [
    { name: '颜色', options: ['原色钛金属', '蓝色钛金属', '白色钛金属', '黑色钛金属'] },
    { name: '容量', options: ['256GB', '512GB', '1TB'] }
  ]
}

export const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1)
  const [selectedSpecs, setSelectedSpecs] = useState<Record<string, string>>({})
  const addItem = useCartStore(state => state.addItem)

  const handleAddToCart = () => {
    addItem({
      id: Date.now(),
      productId: mockProduct.id,
      name: mockProduct.name,
      price: mockProduct.price,
      quantity,
      image: mockProduct.image,
      selectedSpecs
    })
  }

  return (
    <Layout className="product-detail-layout">
      <Navigation />
      <Content className="product-detail-content">
        <div className="product-detail-container">
          {/* 面包屑导航 */}
          <Breadcrumb style={{ marginBottom: 24 }}>
            <Breadcrumb.Item>
              <IconHome />
            </Breadcrumb.Item>
            <Breadcrumb.Item>{mockProduct.category}</Breadcrumb.Item>
            <Breadcrumb.Item>{mockProduct.name}</Breadcrumb.Item>
          </Breadcrumb>

          <Card>
            <Row gutter={32}>
              {/* 左侧图片 */}
              <Col span={10}>
                <div className="product-images">
                  <Image.PreviewGroup>
                    {mockProduct.images?.map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        alt={`${mockProduct.name}-${index}`}
                        width="100%"
                      />
                    ))}
                  </Image.PreviewGroup>
                </div>
              </Col>

              {/* 右侧信息 */}
              <Col span={14}>
                <div className="product-detail-info">
                  <h1 className="product-title">{mockProduct.name}</h1>
                  
                  <div className="product-meta-info">
                    <span>销量：{mockProduct.sales}</span>
                    <span>评分：⭐ {mockProduct.rating}</span>
                    <span>库存：{mockProduct.stock}</span>
                  </div>

                  <div className="product-price-section">
                    <span className="detail-price">¥{mockProduct.price}</span>
                    {mockProduct.originalPrice && (
                      <span className="detail-original-price">¥{mockProduct.originalPrice}</span>
                    )}
                  </div>

                  {/* 规格选择 */}
                  {mockProduct.specs && (
                    <div className="product-specs">
                      <SpecSelector 
                        specs={mockProduct.specs}
                        onChange={setSelectedSpecs}
                      />
                    </div>
                  )}

                  {/* 数量选择 */}
                  <div className="product-quantity">
                    <span className="quantity-label">数量：</span>
                    <InputNumber
                      min={1}
                      max={mockProduct.stock}
                      value={quantity}
                      onChange={(value) => setQuantity(value as number)}
                    />
                  </div>

                  {/* 操作按钮 */}
                  <Space size="large" className="product-actions-detail">
                    <Button
                      type="primary"
                      size="large"
                      icon={<IconShoppingCart />}
                      onClick={handleAddToCart}
                    >
                      加入购物车
                    </Button>
                    <Button size="large" type="outline">
                      立即购买
                    </Button>
                  </Space>

                  {/* 商品描述 */}
                  <div className="product-description">
                    <h3>商品描述</h3>
                    <p>{mockProduct.description}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </Content>
    </Layout>
  )
}