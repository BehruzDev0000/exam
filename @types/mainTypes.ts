export interface GalleryType {
  id: number
  isActive: boolean
  createdAt: string
  updatedAt: string
  image: string
}
export interface Product {
  id: number
  isActive: boolean
  createdAt: string
  updatedAt: string
  name: string
  description: string
  price: string
  image: string
  rating: number
  reviewsCount: number
  isAvailable: boolean
}
export interface Category {
  id: number
  isActive: boolean
  createdAt: string
  updatedAt: string
  name: string
  products: Product[]
}
export interface ContactData {
  name: string;
  email: string;
  message: string;
}
export interface OrderItem {
    id: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    product: Product;
    productName: string;
    quantity: number;
    unitPrice: string;
    totalPrice: string;
    note: string | null;
}
export interface Order{
    id: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    orderNumber: string;
    waiter: string | null; 
    cook: string| null;
    customer: string | null;
    table: string | null;
    customerName: string | null;
    customerEmail: string | null;
    guestCount: number;
    status: string; 
    type: string;   
    paymentMethod: string | null;
    paymentStatus: string;
    subtotal: string;
    serviceFee: string;
    discount: string;
    totalAmount: string;
    deliveryAddress: string | null;
    note: string | null;
    acceptedAt: string | null;
    completedAt: string | null;
    items: OrderItem[];
}
export interface Table {
  id: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  tableNumber: number;
  capacity: number;
  location: string;
  status: 'AVAILABLE' | 'RESERVED' | 'OCCUPIED' | string; 
}