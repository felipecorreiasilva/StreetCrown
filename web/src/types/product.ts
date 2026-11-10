export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  stock: number;
  dimensions?: {
    width: number;
    height: number;
    length: number;
    weight: number;
  };
}