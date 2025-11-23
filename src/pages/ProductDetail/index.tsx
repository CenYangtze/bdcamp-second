import { useState, useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Layout, Grid, Card, Button, InputNumber, Space, Breadcrumb, Image, Spin, Message } from '@arco-design/web-react'
import { Navigation } from '../../components/Navigation'
import { SpecSelector } from '../../components/SpecSelector'
import { ProductCard } from '../../components/ProductCard'
import { useCartStore } from '../../store/cartStore'
import { useProductStore } from '../../store/productStore'
import './index.css'

const { Content } = Layout
const { Row, Col } = Grid

export const ProductDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [selectedSpecs, setSelectedSpecs] = useState<Record<string, string>>({})
  
  const addItem = useCartStore(state => state.addItem)
  const { products, getProductById, fetchProducts } = useProductStore()

  // 加载商品详情
  useEffect(() => {
    if (id) {
      const productId = parseInt(id)
      const product = getProductById(productId)
      if (!product) {
        // 如果没有商品数据，先加载
        fetchProducts()
      }
    }
  }, [id, getProductById, fetchProducts])

  // 根据 ID 获取商品
  const product = id ? getProductById(parseInt(id)) : null

  // 获取推荐商品（随机选择 4 个同类别或其他商品）
  const recommendedProducts = useMemo(() => {
    if (!product || !products.length) return []
    
    // 优先推荐同类别商品
    const sameCategoryProducts = products.filter(
      p => p.category === product.category && p.id !== product.id
    )
    
    // 如果同类别商品不足，添加其他商品
    const otherProducts = products.filter(
      p => p.category !== product.category && p.id !== product.id
    )
    
    const allRecommendations = [...sameCategoryProducts, ...otherProducts]
    
    // 随机打乱并选取 4 个
    const shuffled = allRecommendations.sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 4)
  }, [product, products])

  const handleAddToCart = () => {
    if (!product) return
    
    addItem({
      id: Date.now(),
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
      selectedSpecs
    })
    
    Message.success({
      content: `已将 ${quantity} 件商品加入购物车`,
      duration: 2000
    })
  }

  if (!product) {
    return (
      <Layout className="product-detail-layout">
        <Navigation />
        <Content className="product-detail-content">
          <div className="product-detail-container">
            <Spin loading={true} style={{ display: 'block', textAlign: 'center', padding: '100px 0' }} />
          </div>
        </Content>
      </Layout>
    )
  }

  return (
    <Layout className="product-detail-layout">
      <Navigation />
      <Content className="product-detail-content">
        <div className="product-detail-container">
          {/* 面包屑导航 */}
          <Breadcrumb style={{ marginBottom: 24 }}>
            <Breadcrumb.Item onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
              🏠 首页
            </Breadcrumb.Item>
            <Breadcrumb.Item>{product.category}</Breadcrumb.Item>
            <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
          </Breadcrumb>

          <Card>
            <Row gutter={32}>
              {/* 左侧图片 */}
              <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <div className="product-images">
                  <Image.PreviewGroup>
                    {product.images?.map((img: string, index: number) => (
                      <Image
                        key={index}
                        src={img}
                        alt={`${product.name}-${index}`}
                        width="100%"
                      />
                    ))}
                  </Image.PreviewGroup>
                </div>
              </Col>

              {/* 右侧信息 */}
              <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                <div className="product-detail-info">
                  <h1 className="product-title">{product.name}</h1>
                  
                  <div className="product-meta-info">
                    <span>销量：{product.sales}</span>
                    <span>评分：⭐ {product.rating}</span>
                    <span>库存：{product.stock}</span>
                  </div>

                  <div className="product-price-section">
                    <span className="detail-price">¥{product.price}</span>
                    {product.originalPrice && (
                      <span className="detail-original-price">¥{product.originalPrice}</span>
                    )}
                  </div>

                  {/* 规格选择 */}
                  {product.specs && (
                    <div className="product-specs">
                      <SpecSelector 
                        specs={product.specs}
                        onChange={setSelectedSpecs}
                      />
                    </div>
                  )}

                  {/* 数量选择 */}
                  <div className="product-quantity">
                    <span className="quantity-label">数量：</span>
                    <InputNumber
                      min={1}
                      max={product.stock}
                      value={quantity}
                      onChange={(value) => setQuantity(value as number)}
                    />
                  </div>

                  {/* 操作按钮 */}
                  <Space size="large" className="product-actions-detail">
                    <Button
                      type="primary"
                      size="large"
                      onClick={handleAddToCart}
                    >
                      🛒 加入购物车
                    </Button>
                    <Button size="large" type="outline">
                      立即购买
                    </Button>
                  </Space>

                  {/* 商品描述 */}
                  <div className="product-description">
                    <h3>商品描述</h3>
                    <p>{product.description}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>

          {/* 推荐商品 */}
          {recommendedProducts.length > 0 && (
            <div className="recommended-section">
              <h2 className="recommended-title">🌟 推荐商品</h2>
              <Row gutter={[16, 16]}>
                {recommendedProducts.map(recommendedProduct => (
                  <Col xs={12} sm={12} md={12} lg={6} xl={6} key={recommendedProduct.id}>
                    <ProductCard
                      product={recommendedProduct}
                      onViewDetail={(productId) => {
                        navigate(`/product/${productId}`)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </div>
      </Content>
    </Layout>
  )
}