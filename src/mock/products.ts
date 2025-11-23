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
    name: 'MacBook Pro 14 M3 芯片',
    price: 15999,
    originalPrice: 17999,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    category: 'digital',
    description: '搭载 M3 芯片的 MacBook Pro，性能强劲，续航持久。',
    stock: 50,
    sales: 567,
    rating: 4.9,
    specs: [
      { name: '颜色', options: ['深空灰色', '银色'] },
      { name: '内存', options: ['16GB', '32GB'] }
    ]
  },
  {
    id: 3,
    name: 'AirPods Pro 第二代',
    price: 1899,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400',
    category: 'digital',
    description: '主动降噪、空间音频、长续航。',
    stock: 200,
    sales: 3456,
    rating: 4.7
  },
  {
    id: 4,
    name: '运动休闲卫衣',
    price: 299,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
    category: 'clothing',
    description: '舒适面料，多色可选，适合日常穿着。',
    stock: 150,
    sales: 890,
    rating: 4.5,
    specs: [
      { name: '颜色', options: ['黑色', '白色', '灰色', '蓝色'] },
      { name: '尺码', options: ['S', 'M', 'L', 'XL'] }
    ]
  },
  {
    id: 5,
    name: '真皮商务公文包',
    price: 899,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    category: 'clothing',
    description: '头层牛皮，精致做工，商务首选。',
    stock: 80,
    sales: 234,
    rating: 4.6
  },
  {
    id: 6,
    name: '有机水果礼盒',
    price: 188,
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400',
    category: 'food',
    description: '新鲜有机水果，产地直发。',
    stock: 300,
    sales: 1567,
    rating: 4.8
  },
  {
    id: 7,
    name: '进口咖啡豆 500g',
    price: 158,
    originalPrice: 198,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    category: 'food',
    description: '精选咖啡豆，香气浓郁，口感醇厚。',
    stock: 120,
    sales: 678,
    rating: 4.7
  },
  {
    id: 8,
    name: '北欧风格台灯',
    price: 399,
    originalPrice: 599,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
    category: 'home',
    description: '简约设计，护眼光源，适合学习工作。',
    stock: 90,
    sales: 456,
    rating: 4.6
  },
  {
    id: 9,
    name: '智能扫地机器人',
    price: 1899,
    originalPrice: 2399,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400',
    category: 'home',
    description: '智能规划路径，自动回充，解放双手。',
    stock: 60,
    sales: 789,
    rating: 4.7
  },
  {
    id: 10,
    name: 'iPad Air 第五代',
    price: 4799,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
    category: 'digital',
    description: '轻薄便携，性能强劲，支持 Apple Pencil。',
    stock: 70,
    sales: 543,
    rating: 4.8,
    specs: [
      { name: '颜色', options: ['深空灰色', '星光色', '紫色', '蓝色'] },
      { name: '容量', options: ['64GB', '256GB'] }
    ]
  },
  {
    id: 11,
    name: '无线蓝牙耳机',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400',
    category: 'digital',
    description: '长续航，音质清晰，佩戴舒适。',
    stock: 180,
    sales: 2134,
    rating: 4.5
  },
  {
    id: 12,
    name: '棉质T恤 3件装',
    price: 199,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    category: 'clothing',
    description: '纯棉面料，透气舒适，基础款必备。',
    stock: 250,
    sales: 3421,
    rating: 4.6,
    specs: [
      { name: '颜色', options: ['黑白灰组合', '彩色组合'] },
      { name: '尺��', options: ['M', 'L', 'XL', 'XXL'] }
    ]
  }
]