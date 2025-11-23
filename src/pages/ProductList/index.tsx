import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Grid, Pagination, Spin } from '@arco-design/web-react'
import { Navigation } from '../../components/Navigation'
import { Filter } from '../../components/Filter'
import { ProductCard } from '../../components/ProductCard'
import { useProductStore } from '../../store/productStore'
import { useFilterStore } from '../../store/filterStore'
import './index.css'

const { Content } = Layout
const { Row, Col } = Grid

export const ProductList = () => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(1)
  const [pageSize] = useState(12)

  // 使用 store
  const { filteredProducts, loading, fetchProducts, filterProducts } = useProductStore()
  const { filters } = useFilterStore()

  // 初始化加载商品
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  // 监听筛选条件变化
  useEffect(() => {
    filterProducts(filters)
  }, [filters, filterProducts])

  const handleViewDetail = (id: number) => {
    navigate(`/product/${id}`)
  }

  // 分页数据
  const startIndex = (current - 1) * pageSize
  const endIndex = startIndex + pageSize
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

  return (
    <Layout className="product-list-layout">
      <Navigation />
      <Content className="product-list-content">
        <div className="product-list-container">
          <Row gutter={24}>
            {/* 左侧筛选栏 */}
            <Col xs={24} sm={24} md={8} lg={6} xl={6}>
              <Filter />
            </Col>

            {/* 右侧商品列表 */}
            <Col xs={24} sm={24} md={16} lg={18} xl={18}>
              <Spin loading={loading} style={{ display: 'block' }}>
                {filteredProducts.length === 0 && !loading ? (
                  <div className="empty-state">
                    <div className="empty-state-icon">📦</div>
                    <div>暂无符合条件的商品</div>
                  </div>
                ) : (
                  <>
                    <Row gutter={[16, 16]}>
                      {paginatedProducts.map(product => (
                        <Col xs={12} sm={12} md={12} lg={8} xl={6} key={product.id}>
                          <ProductCard 
                            product={product}
                            onViewDetail={handleViewDetail}
                          />
                        </Col>
                      ))}
                    </Row>

                    {/* 分页器 */}
                    {filteredProducts.length > 0 && (
                      <div className="pagination-wrapper">
                        <Pagination
                          current={current}
                          pageSize={pageSize}
                          total={filteredProducts.length}
                          onChange={(page) => {
                            setCurrent(page)
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                          showTotal
                          showJumper
                        />
                      </div>
                    )}
                  </>
                )}
              </Spin>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  )
}