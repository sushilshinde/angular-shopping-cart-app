export interface  ShopState {
  products: {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    images: string[];
  }[],
  loading?: boolean,
  error?: any
    
  }


  export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    images: string[];
  }
  