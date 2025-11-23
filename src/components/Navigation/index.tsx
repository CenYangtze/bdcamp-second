import { useState } from 'react'
import { Layout, Input, Badge, Button, Space } from '@arco-design/web-react'
import { useCartStore } from '../../store/cartStore'
import { useFilterStore } from '../../store/filterStore'
import { CartPopup } from '../CartPopup'
import './index.css'

const { Header } = Layout

export const Navigation = () => {
  const [searchValue, setSearchValue] = useState('')
  const [cartVisible, setCartVisible] = useState(false)
  const cartCount = useCartStore(state => state.getTotalCount())
  const setKeyword = useFilterStore(state => state.setKeyword)

  const handleSearch = () => {
    setKeyword(searchValue)
  }

  const handleCartClick = () => {
    setCartVisible(true)
  }

  const handleCartClose = () => {
    setCartVisible(false)
  }

  return (
    <Header className="navigation-header">
      <div className="navigation-container">
        <div className="navigation-logo">
          <h1>电商平台</h1>
        </div>

        <div className="navigation-search">
          <Input.Search
            placeholder="搜索商品"
            value={searchValue}
            onChange={setSearchValue}
            onSearch={handleSearch}
            style={{ width: 400 }}
          />
        </div>

        <div className="navigation-actions">
          <Space size="large">
            <Badge count={cartCount} maxCount={99}>
              <Button
                type="text"
                size="large"
                onClick={handleCartClick}
              >
                🛒 购物车
              </Button>
            </Badge>
          </Space>
        </div>
      </div>
      
      {/* 购物车弹窗 */}
      <CartPopup visible={cartVisible} onClose={handleCartClose} />
    </Header>
  )
}