import { Drawer, List, Button, InputNumber, Empty, Space, Divider } from '@arco-design/web-react'
import { IconDelete } from '@arco-design/web-react/icon'
import { useCartStore } from '../../store/cartStore'
import './index.css'

interface CartPopupProps {
  visible: boolean
  onClose: () => void
}

export const CartPopup = ({ visible, onClose }: CartPopupProps) => {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCartStore()

  return (
    <Drawer
      width={400}
      title="购物车"
      visible={visible}
      onCancel={onClose}
      footer={
        items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>合计：</span>
              <span className="cart-total-price">¥{getTotalPrice().toFixed(2)}</span>
            </div>
            <Space>
              <Button onClick={clearCart}>清空购物车</Button>
              <Button type="primary" long>
                去结算
              </Button>
            </Space>
          </div>
        )
      }
    >
      {items.length === 0 ? (
        <Empty description="购物车是空的" />
      ) : (
        <List
          dataSource={items}
          render={(item) => (
            <List.Item key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-info">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">¥{item.price}</div>
                <div className="cart-item-actions">
                  <InputNumber
                    min={1}
                    value={item.quantity}
                    onChange={(value) => updateQuantity(item.id, value as number)}
                    style={{ width: 100 }}
                  />
                  <Button
                    type="text"
                    status="danger"
                    icon={<IconDelete />}
                    onClick={() => removeItem(item.id)}
                  />
                </div>
              </div>
            </List.Item>
          )}
        />
      )}
    </Drawer>
  )
}