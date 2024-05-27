interface CartProduct extends Product {
  quantity: number;
}

export interface Product {
  id: string;
  storeId: string;
  categoryId: string;
  category: Category;
  name: string;
  price: number;
  description: string; 
  isFeatured: boolean;
  isArchived: boolean;
  sizeId: string;
  size: Size;
  images: Image[];
  orderItems: OrderItem[];
  createdAt: string;
  updatedAt: string;
}

  
  export interface Image {
    id: string;
    productId: string;
    product: Product;
    url: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Billboard {
    id: string;
    storeId: string;
    store: Store;
    label: string;
    imageUrl: string;
    categories: Category[];
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Category {
    id: string;
    storeId: string;
    store: Store;
    billboardId: string;
    billboard: Billboard;
    imageUrl: string;
    name: string;
    products: Product[];
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Size {
    id: string;
    storeId: string;
    store: Store;
    name: string;
    value: string;
    products: Product[];
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Order {
    id: string;
    storeId: string;
    store: Store;
    orderItems: OrderItem[];
    isPaid: boolean;
    phone: string;
    address: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface OrderItem {
    id: string;
    orderId: string;
    order: Order;
    productId: string;
    product: Product;
  }
  
  export interface Blog {
    id: string;
    storeId: string;
    store: Store;
    title: string;
    content: string;
    author: string;
    tags: string[];
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Store {
    id: string;
    name: string;
    userId: string;
    billboards: Billboard[];
    categories: Category[];
    products: Product[];
    sizes: Size[];
    blogs: Blog[];
    orders: Order[];
    createdAt: string;
    updatedAt: string;
  }
  