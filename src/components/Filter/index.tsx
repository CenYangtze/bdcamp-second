import { Card, Select, Slider, Button, Space } from '@arco-design/web-react'
import { useFilterStore } from '../../store/filterStore'
import './index.css'

const Option = Select.Option

const categories = [
  { label: '全部分类', value: '' },
  { label: '数码产品', value: 'digital' },
  { label: '服装鞋包', value: 'clothing' },
  { label: '食品饮料', value: 'food' },
  { label: '家居用品', value: 'home' }
]

export const Filter = () => {
  const { filters, setCategory, setPriceRange, setSortBy, resetFilters } = useFilterStore()

  return (
    <Card className="filter-card" title="筛选条件">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        {/* 分类筛选 */}
        <div>
          <div className="filter-label">商品分类</div>
          <Select
            placeholder="请选择分类"
            value={filters.category}
            onChange={setCategory}
            style={{ width: '100%' }}
          >
            {categories.map(cat => (
              <Option key={cat.value} value={cat.value}>
                {cat.label}
              </Option>
            ))}
          </Select>
        </div>

        {/* 价格区间 */}
        <div>
          <div className="filter-label">价格区间</div>
          <Slider
            range
            min={0}
            max={10000}
            step={100}
            defaultValue={[0, 10000]}
            onAfterChange={(value) => setPriceRange(value as [number, number])}
            formatTooltip={(value) => `¥${value}`}
          />
        </div>

        {/* 排序方式 */}
        <div>
          <div className="filter-label">排序方式</div>
          <Select
            value={filters.sortBy}
            onChange={setSortBy}
            style={{ width: '100%' }}
          >
            <Option value="default">默认排序</Option>
            <Option value="price-asc">价格从低到高</Option>
            <Option value="price-desc">价格从高到低</Option>
            <Option value="sales">销量优先</Option>
          </Select>
        </div>

        {/* 重置按钮 */}
        <Button type="outline" long onClick={resetFilters}>
          重置筛选
        </Button>
      </Space>
    </Card>
  )
}