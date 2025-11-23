import { Drawer, List, Button, InputNumber, Empty, Space, Divider, Message } from '@arco-design/web-react'
import { IconDelete } from '@arco-design/web-react/icon'
import { useCartStore } from '../../store/cartStore'
import './index.css'

interface CartPopupProps {
  visible: boolean
  onClose: () => void
}

export const CartPopup = ({ visible, onClose }: CartPopupProps) => {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice, getTotalCount } = useCartStore()

  const handleClearCart = () => {
    clearCart()
    Message.success('购物车已清空')
  }

  const handleCheckout = () => {
    Message.info('结算功能开发中...')
    // TODO: 实现结算逻辑
  }

  const handleRemoveItem = (id: number, name: string) => {
    removeItem(id)
    Message.success(`已从购物车移除: ${name}`)
  }

  return (
    <Drawer
      width={420}
      title={
        <div className="cart-header-title">
          <span>购物车</span>
          {items.length > 0 && (
            <span className="cart-header-count">
              共 {getTotalCount()} 件商品
            </span>
          )}
        </div>
      }
      visible={visible}
      onCancel={onClose}
      footer={
        items.length > 0 ? (
          <div className="cart-footer">
            <Divider className="cart-footer-divider" />
            <div className="cart-summary">
              <div className="cart-summary-row">
                <span>商品数量：</span>
                <span>{getTotalCount()} 件</span>
              </div>
              <div className="cart-summary-row cart-total">
                <span>合计：</span>
                <span className="cart-total-price">¥{getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
            <Space className="cart-footer-buttons">
              <Button onClick={handleClearCart}>
                清空购物车
              </Button>
              <Button type="primary" onClick={handleCheckout}>
                去结算 (¥{getTotalPrice().toFixed(2)})
              </Button>
            </Space>
          </div>
        ) : null
      }
    >
      {items.length === 0 ? (
        <Empty 
          description="购物车是空的，快去选购商品吧~" 
          className="cart-empty"
        />
      ) : (
        <List
          className="cart-list"
          dataSource={items}
          render={(item) => (
            <List.Item key={item.id} className="cart-item">
              <div className="cart-item-content">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-name" title={item.name}>
                    {item.name}
                  </div>
                  <div className="cart-item-price">¥{item.price.toFixed(2)}</div>
                  <div className="cart-item-actions">
                    <InputNumber
                      min={1}
                      max={99}
                      value={item.quantity}
                      onChange={(value) => updateQuantity(item.id, value as number)}
                      style={{ width: 100 }}
                    />
                    <Button
                      type="text"
                      status="danger"
                      icon={<IconDelete />}
                      onClick={() => handleRemoveItem(item.id, item.name)}
                    >
                      删除
                    </Button>
                  </div>
                  <div className="cart-item-subtotal">
                    小计: ¥{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            </List.Item>
          )}
        />
      )}
    </Drawer>
  )
}