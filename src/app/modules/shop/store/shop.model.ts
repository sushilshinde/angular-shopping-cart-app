export interface  ShopState {
  products: {
    _id: number;
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
    _id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    images: string[];
  }
  