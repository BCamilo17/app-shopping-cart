export interface ProductResponse {
    products: Product[];
    message: string;
  }
export interface Product {
    id: number;
    name: string;
    price: number;
}
export interface CartResponse {
    cart: Product[];
    message: string;
}
  