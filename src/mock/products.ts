import { Product } from '../types'

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max 256GB',
    price: 9999,
    originalPrice: 10999,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800'
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
  },
  {
    id: 2,
    name: 'MacBook Pro 14英寸 M3 芯片',
    price: 15999,
    originalPrice: 17999,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800'],
    category: 'digital',
    description: 'M3 芯片强大性能，14英寸 Liquid Retina XDR 显示屏。',
    stock: 50,
    sales: 567,
    rating: 4.9,
    specs: [
      { name: '颜色', options: ['深空灰色', '银色'] },
      { name: '内存', options: ['16GB', '32GB', '64GB'] }
    ]
  },
  {
    id: 3,
    name: 'AirPods Pro 第二代',
    price: 1899,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400',
    images: ['https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800'],
    category: 'digital',
    description: '主动降噪，自适应通透模式，空间音频。',
    stock: 200,
    sales: 3456,
    rating: 4.7
  },
  {
    id: 4,
    name: 'iPad Air 11英寸 M2',
    price: 4799,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
    images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800'],
    category: 'digital',
    description: 'M2 芯片，11英寸 Liquid Retina 显示屏，支持 Apple Pencil。',
    stock: 80,
    sales: 789,
    rating: 4.6,
    specs: [
      { name: '颜色', options: ['深空灰色', '星光色', '紫色', '蓝色'] },
      { name: '容量', options: ['128GB', '256GB', '512GB'] }
    ]
  },
  {
    id: 5,
    name: 'Apple Watch Series 9',
    price: 3199,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400',
    images: ['https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800'],
    category: 'digital',
    description: 'S9 芯片，全天候视网膜显示屏，健康和健身追踪。',
    stock: 150,
    sales: 2345,
    rating: 4.8
  },
  {
    id: 6,
    name: '索尼 WH-1000XM5 降噪耳机',
    price: 2299,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400',
    images: ['https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800'],
    category: 'digital',
    description: '业界领先的降噪技术，30小时续航，舒适佩戴。',
    stock: 120,
    sales: 1567,
    rating: 4.7,
    specs: [
      { name: '颜色', options: ['黑色', '银色'] }
    ]
  },
  {
    id: 7,
    name: '戴森 V15 Detect 吸尘器',
    price: 4990,
    originalPrice: 5490,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400',
    images: ['https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800'],
    category: 'home',
    description: '激光探测科技，智能吸尘，长达60分钟运行时间。',
    stock: 60,
    sales: 456,
    rating: 4.9
  },
  {
    id: 8,
    name: '小米扫地机器人 Ultra',
    price: 3999,
    originalPrice: 4499,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400',
    images: ['https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800'],
    category: 'home',
    description: '全自动清洁，智能避障，自动集尘。',
    stock: 90,
    sales: 2234,
    rating: 4.5
  },
  {
    id: 9,
    name: 'Nike Air Max 270 运动鞋',
    price: 1299,
    originalPrice: 1499,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800'],
    category: 'clothing',
    description: '舒适气垫，时尚设计，适合日常穿着和运动。',
    stock: 200,
    sales: 3456,
    rating: 4.6,
    specs: [
      { name: '尺码', options: ['39', '40', '41', '42', '43', '44'] },
      { name: '颜色', options: ['黑色', '白色', '蓝色'] }
    ]
  },
  {
    id: 10,
    name: 'Adidas Ultraboost 22',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400',
    images: ['https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800'],
    category: 'clothing',
    description: '极致缓震，能量回弹，专业跑鞋。',
    stock: 180,
    sales: 2890,
    rating: 4.7,
    specs: [
      { name: '尺码', options: ['39', '40', '41', '42', '43'] },
      { name: '颜色', options: ['黑色', '白色', '灰色'] }
    ]
  },
  {
    id: 11,
    name: '星巴克咖啡豆 Pike Place 中度烘焙',
    price: 128,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    images: ['https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800'],
    category: 'food',
    description: '经典中度烘焙，口感均衡，适合日常饮用。',
    stock: 500,
    sales: 5678,
    rating: 4.4
  },
  {
    id: 12,
    name: '三只松鼠每日坚果大礼包',
    price: 168,
    originalPrice: 198,
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400',
    images: ['https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800'],
    category: 'food',
    description: '混合坚果，每日营养，健康零食。',
    stock: 300,
    sales: 4567,
    rating: 4.5
  }
]