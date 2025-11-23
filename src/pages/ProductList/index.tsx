import { useState } from 'react'
import { Layout, Row, Col, Pagination } from '@arco-design/web-react'
import { Navigation } from '../../components/Navigation'
import { Filter } from '../../components/Filter'
import { ProductCard } from '../../components/ProductCard'
import { Product } from '../../types'
import './index.css'

const { Content } = Layout

// Mock 数据
const mockProducts: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 9999,
    originalPrice: 10999,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    category: 'digital',
    stock: 100,
    sales: 1234,
    rating: 4.8
  },
  {
    id: 2,
    name: 'MacBook Pro 14',
    price: 15999,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    category: 'digital',
    stock: 50,
    sales: 567,
    rating: 4.9
  },
  // 添加更多商品...
]

export const ProductList = () => {
  const [current, setCurrent] = useState(1)
  const [pageSize] = useState(12)

  const handleViewDetail = (id: number) => {
    console.log('查看商品详情:', id)
    // 这里后续可以跳转到详情页
  }

  return (
    <Layout className="product-list-layout">
      <Navigation />
      <Content className="product-list-content">
        <div className="product-list-container">
          <Row gutter={24}>
            {/* 左侧筛选栏 */}
            <Col span={6}>
              <Filter />
            </Col>

            {/* 右侧商品列表 */}
            <Col span={18}>
              <Row gutter={[16, 16]}>
                {mockProducts.map(product => (
                  <Col span={6} key={product.id}>
                    <ProductCard 
                      product={product}
                      onViewDetail={handleViewDetail}
                    />
                  </Col>
                ))}
              </Row>

              {/* 分页器 */}
              <div className="pagination-wrapper">
                <Pagination
                  current={current}
                  pageSize={pageSize}
                  total={100}
                  onChange={setCurrent}
                  showTotal
                  showJumper
                  sizeCanChange
                />
              </div>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  )
}