import type { Product } from '../types'

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
  },
  {
    id: 13,
    name: 'Samsung Galaxy S24 Ultra',
    price: 8999,
    originalPrice: 9999,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400',
    images: ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800'],
    category: 'digital',
    description: '骁龙8 Gen3处理器，200MP主摄，S Pen触控笔。',
    stock: 85,
    sales: 1892,
    rating: 4.7,
    specs: [
      { name: '颜色', options: ['钛灰色', '钛黑色', '钛紫色'] },
      { name: '容量', options: ['256GB', '512GB', '1TB'] }
    ]
  },
  {
    id: 14,
    name: '戴尔 XPS 13 笔记本',
    price: 12999,
    originalPrice: 14999,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400',
    images: ['https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800'],
    category: 'digital',
    description: '13.4英寸超窄边框，Intel 13代酷睿，轻薄便携。',
    stock: 45,
    sales: 678,
    rating: 4.8,
    specs: [
      { name: '颜色', options: ['铂金银', '霜蓝色'] },
      { name: '配置', options: ['i5/16GB/512GB', 'i7/32GB/1TB'] }
    ]
  },
  {
    id: 15,
    name: 'Bose QuietComfort 45 降噪耳机',
    price: 2399,
    originalPrice: 2699,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400',
    images: ['https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800'],
    category: 'digital',
    description: '舒适降噪，24小时续航，清晰通话。',
    stock: 150,
    sales: 2134,
    rating: 4.6,
    specs: [
      { name: '颜色', options: ['黑色', '白色', '蓝色'] }
    ]
  },
  {
    id: 16,
    name: 'GoPro HERO 12 Black 运动相机',
    price: 3599,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400',
    images: ['https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800'],
    category: 'digital',
    description: '5.3K60帧视频，超强防抖，防水10米。',
    stock: 95,
    sales: 1245,
    rating: 4.8
  },
  {
    id: 17,
    name: 'DJI Mini 4 Pro 无人机',
    price: 5299,
    originalPrice: 5799,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400',
    images: ['https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800'],
    category: 'digital',
    description: '4K HDR视频，全向避障，34分钟续航。',
    stock: 70,
    sales: 892,
    rating: 4.9
  },
  {
    id: 18,
    name: 'Kindle Paperwhite 电子书阅读器',
    price: 998,
    originalPrice: 1198,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
    images: ['https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800'],
    category: 'digital',
    description: '6.8英寸屏幕，IPX8防水，持久续航。',
    stock: 200,
    sales: 3456,
    rating: 4.7
  },
  {
    id: 19,
    name: 'Nintendo Switch OLED版',
    price: 2499,
    originalPrice: 2699,
    image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400',
    images: ['https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800'],
    category: 'digital',
    description: '7英寸OLED屏幕，64GB存储，掌机主机二合一。',
    stock: 120,
    sales: 2890,
    rating: 4.8,
    specs: [
      { name: '颜色', options: ['白色', '霓虹蓝红'] }
    ]
  },
  {
    id: 20,
    name: 'Logitech MX Master 3S 鼠标',
    price: 799,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
    images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800'],
    category: 'digital',
    description: '人体工学设计，8K DPI，多设备切换。',
    stock: 180,
    sales: 4123,
    rating: 4.9,
    specs: [
      { name: '颜色', options: ['黑色', '灰色'] }
    ]
  },
  {
    id: 21,
    name: 'IKEA POÄNG 躺椅',
    price: 899,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
    images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800'],
    category: 'home',
    description: '经典北欧设计，舒适弹性，多色可选。',
    stock: 50,
    sales: 1234,
    rating: 4.6,
    specs: [
      { name: '颜色', options: ['白色', '黑色', '米色'] }
    ]
  },
  {
    id: 22,
    name: '飞利浦空气炸锅 XXL',
    price: 1499,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1585237672815-729a071ca0b5?w=400',
    images: ['https://images.unsplash.com/photo-1585237672815-729a071ca0b5?w=800'],
    category: 'home',
    description: '7.3L大容量，无油烹饪，健康美味。',
    stock: 110,
    sales: 3245,
    rating: 4.7
  },
  {
    id: 23,
    name: '美的电饭煲 5L 智能预约',
    price: 599,
    originalPrice: 799,
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400',
    images: ['https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800'],
    category: 'home',
    description: 'IH加热，24小时预约，多种烹饪模式。',
    stock: 200,
    sales: 5678,
    rating: 4.5
  },
  {
    id: 24,
    name: '九阳破壁机 Pro',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400',
    images: ['https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=800'],
    category: 'home',
    description: '8叶精钢刀头，静音破壁，自清洗功能。',
    stock: 85,
    sales: 2890,
    rating: 4.6
  },
  {
    id: 25,
    name: '小米智能台灯 Pro',
    price: 399,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800'],
    category: 'home',
    description: 'Ra95高显色，无频闪，米家APP控制。',
    stock: 250,
    sales: 6789,
    rating: 4.7
  },
  {
    id: 26,
    name: 'Muji 无印良品 懒人沙发',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800'],
    category: 'home',
    description: '可拆洗外套，舒适填充，简约设计。',
    stock: 65,
    sales: 1567,
    rating: 4.8,
    specs: [
      { name: '颜色', options: ['米白色', '灰色', '深蓝色'] }
    ]
  },
  {
    id: 27,
    name: 'Adidas 三叶草卫衣',
    price: 599,
    originalPrice: 799,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800'],
    category: 'clothing',
    description: '经典款式，舒适棉质，百搭休闲。',
    stock: 300,
    sales: 4567,
    rating: 4.6,
    specs: [
      { name: '尺码', options: ['S', 'M', 'L', 'XL', 'XXL'] },
      { name: '颜色', options: ['黑色', '白色', '灰色', '海军蓝'] }
    ]
  },
  {
    id: 28,
    name: 'Levi\'s 501 经典牛仔裤',
    price: 799,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    images: ['https://images.unsplash.com/photo-1542272604-787c3835535d?w=800'],
    category: 'clothing',
    description: '经典直筒剪裁，100%纯棉，永不过时。',
    stock: 200,
    sales: 3890,
    rating: 4.7,
    specs: [
      { name: '尺码', options: ['28', '29', '30', '31', '32', '33', '34'] },
      { name: '颜色', options: ['深蓝色', '浅蓝色', '黑色'] }
    ]
  },
  {
    id: 29,
    name: 'The North Face 冲锋衣',
    price: 1899,
    originalPrice: 2299,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
    images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800'],
    category: 'clothing',
    description: '防水透气，三合一设计，户外必备。',
    stock: 120,
    sales: 2345,
    rating: 4.8,
    specs: [
      { name: '尺码', options: ['S', 'M', 'L', 'XL'] },
      { name: '颜色', options: ['黑色', '红色', '蓝色'] }
    ]
  },
  {
    id: 30,
    name: 'Uniqlo 摇粒绒外套',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400',
    images: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800'],
    category: 'clothing',
    description: '保暖舒适，轻便易搭配，多色可选。',
    stock: 400,
    sales: 8901,
    rating: 4.5,
    specs: [
      { name: '尺码', options: ['XS', 'S', 'M', 'L', 'XL'] },
      { name: '颜色', options: ['黑色', '灰色', '米色', '绿色', '紫色'] }
    ]
  },
  {
    id: 31,
    name: 'New Balance 574 复古跑鞋',
    price: 799,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400',
    images: ['https://images.unsplash.com/photo-1539185441755-769473a23570?w=800'],
    category: 'clothing',
    description: '经典复古设计，舒适缓震，日常百搭。',
    stock: 180,
    sales: 3456,
    rating: 4.6,
    specs: [
      { name: '尺码', options: ['39', '40', '41', '42', '43', '44'] },
      { name: '颜色', options: ['灰色', '蓝色', '黑色'] }
    ]
  },
  {
    id: 32,
    name: 'Converse All Star 帆布鞋',
    price: 399,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400',
    images: ['https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800'],
    category: 'clothing',
    description: '经典高帮，街头潮流，舒适透气。',
    stock: 350,
    sales: 7890,
    rating: 4.7,
    specs: [
      { name: '尺码', options: ['36', '37', '38', '39', '40', '41', '42', '43'] },
      { name: '颜色', options: ['白色', '黑色', '红色', '蓝色'] }
    ]
  },
  {
    id: 33,
    name: '良品铺子零食大礼包',
    price: 199,
    originalPrice: 259,
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400',
    images: ['https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800'],
    category: 'food',
    description: '15种零食组合，多口味选择，聚会必备。',
    stock: 450,
    sales: 6789,
    rating: 4.6
  },
  {
    id: 34,
    name: '百草味蜜饯果干礼盒',
    price: 158,
    originalPrice: 188,
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400',
    images: ['https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800'],
    category: 'food',
    description: '天然果干，无添加防腐剂，健康美味。',
    stock: 380,
    sales: 5432,
    rating: 4.5
  },
  {
    id: 35,
    name: '雀巢咖啡胶囊 100颗装',
    price: 289,
    originalPrice: 339,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    images: ['https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800'],
    category: 'food',
    description: '多种口味，便捷冲泡，醇香浓郁。',
    stock: 280,
    sales: 4321,
    rating: 4.6
  },
  {
    id: 36,
    name: '卫龙辣条大礼包',
    price: 99,
    originalPrice: 129,
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400',
    images: ['https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800'],
    category: 'food',
    description: '童年回忆，多种口味，辣味十足。',
    stock: 600,
    sales: 12345,
    rating: 4.7
  },
  {
    id: 37,
    name: 'Ferrero Rocher 费列罗巧克力',
    price: 199,
    originalPrice: 229,
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400',
    images: ['https://images.unsplash.com/photo-1511381939415-e44015466834?w=800'],
    category: 'food',
    description: '48粒装，送礼佳品，香醇可口。',
    stock: 320,
    sales: 5678,
    rating: 4.8
  },
  {
    id: 38,
    name: '小罐茶 龙井茶礼盒',
    price: 1000,
    originalPrice: 1200,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400',
    images: ['https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800'],
    category: 'food',
    description: '西湖龙井，明前茶叶，清香回甘。',
    stock: 150,
    sales: 2345,
    rating: 4.7
  },
  {
    id: 39,
    name: 'Canon EOS R6 Mark II 微单相机',
    price: 15999,
    originalPrice: 17999,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400',
    images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800'],
    category: 'digital',
    description: '2400万像素，6K视频，全像素双核对焦。',
    stock: 45,
    sales: 567,
    rating: 4.9,
    specs: [
      { name: '套装', options: ['单机身', '标准套装', '专业套装'] }
    ]
  },
  {
    id: 40,
    name: 'Sony PlayStation 5 主机',
    price: 3899,
    originalPrice: 4299,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400',
    images: ['https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800'],
    category: 'digital',
    description: '次世代游戏体验，超高速SSD，沉浸式音效。',
    stock: 80,
    sales: 2890,
    rating: 4.9,
    specs: [
      { name: '版本', options: ['光驱版', '数字版'] }
    ]
  },
  {
    id: 41,
    name: 'Xbox Series X 游戏主机',
    price: 3799,
    originalPrice: 4199,
    image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400',
    images: ['https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800'],
    category: 'digital',
    description: '4K 120fps，光线追踪，Game Pass畅玩。',
    stock: 90,
    sales: 2567,
    rating: 4.8
  },
  {
    id: 42,
    name: 'Dyson V12 Detect Slim 吸尘器',
    price: 3990,
    originalPrice: 4490,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400',
    images: ['https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800'],
    category: 'home',
    description: '激光探测，轻量化设计，60分钟续航。',
    stock: 75,
    sales: 1234,
    rating: 4.8
  },
  {
    id: 43,
    name: '米家扫拖机器人 2 Pro',
    price: 2499,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1625485656451-f1e1dcca396f?w=400',
    images: ['https://images.unsplash.com/photo-1625485656451-f1e1dcca396f?w=800'],
    category: 'home',
    description: '激光导航，扫拖一体，自动回洗拖布。',
    stock: 150,
    sales: 3456,
    rating: 4.7
  },
  {
    id: 44,
    name: '科沃斯地宝 X1 OMNI',
    price: 4999,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400',
    images: ['https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800'],
    category: 'home',
    description: '全能基站，自动集尘洗拖布，语音控制。',
    stock: 95,
    sales: 2123,
    rating: 4.8
  },
  {
    id: 45,
    name: '小米空气净化器 4 Pro',
    price: 1999,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400',
    images: ['https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800'],
    category: 'home',
    description: '大空间净化，OLED显示屏，智能联动。',
    stock: 180,
    sales: 4567,
    rating: 4.6
  },
  {
    id: 46,
    name: '云米冰箱 对开门 521L',
    price: 3999,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400',
    images: ['https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800'],
    category: 'home',
    description: '风冷无霜，智能变频，大容量储存。',
    stock: 60,
    sales: 1234,
    rating: 4.7
  },
  {
    id: 47,
    name: 'Puma 运动T恤',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800'],
    category: 'clothing',
    description: '吸湿排汗，透气舒适，运动休闲两相宜。',
    stock: 500,
    sales: 8901,
    rating: 4.5,
    specs: [
      { name: '尺码', options: ['S', 'M', 'L', 'XL', 'XXL'] },
      { name: '颜色', options: ['白色', '黑色', '灰色', '蓝色', '红色'] }
    ]
  },
  {
    id: 48,
    name: 'Under Armour 压缩裤',
    price: 499,
    originalPrice: 699,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800'],
    category: 'clothing',
    description: '肌肉支撑，快干透气，运动必备。',
    stock: 280,
    sales: 4321,
    rating: 4.7,
    specs: [
      { name: '尺码', options: ['S', 'M', 'L', 'XL'] },
      { name: '颜色', options: ['黑色', '灰色', '蓝色'] }
    ]
  },
  {
    id: 49,
    name: 'Columbia 户外登山鞋',
    price: 799,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800'],
    category: 'clothing',
    description: '防水防滑，耐磨耐用，户外探险首选。',
    stock: 200,
    sales: 3456,
    rating: 4.8,
    specs: [
      { name: '尺码', options: ['39', '40', '41', '42', '43', '44'] },
      { name: '颜色', options: ['黑色', '棕色', '灰色'] }
    ]
  },
  {
    id: 50,
    name: 'Timberland 经典工装靴',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400',
    images: ['https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800'],
    category: 'clothing',
    description: '经典黄靴，防水耐穿，街头时尚。',
    stock: 150,
    sales: 2890,
    rating: 4.7,
    specs: [
      { name: '尺码', options: ['39', '40', '41', '42', '43', '44'] },
      { name: '颜色', options: ['小麦色', '黑色', '棕色'] }
    ]
  },
  {
    id: 51,
    name: '农夫山泉天然水 24瓶装',
    price: 45,
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400',
    images: ['https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800'],
    category: 'food',
    description: '天然弱碱性水，清甜可口，家庭必备。',
    stock: 1000,
    sales: 15678,
    rating: 4.6
  },
  {
    id: 52,
    name: '元气森林无糖气泡水 12瓶',
    price: 59,
    originalPrice: 69,
    image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400',
    images: ['https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=800'],
    category: 'food',
    description: '0糖0脂0卡，多种口味，健康饮品。',
    stock: 800,
    sales: 23456,
    rating: 4.7
  }
]