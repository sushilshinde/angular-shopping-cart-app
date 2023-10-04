// Define an interface representing the state shape for the 'shop' feature
export interface ShopState {
  // Array of products in the shop
  products: {
    _id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    images: string[];
  }[];

  // Optional loading flag indicating whether products are being loaded
  loading?: boolean;

  // Optional error property for handling errors related to product loading
  error?: any;
}

// Define an interface representing the structure of a product
export interface Product {
  _id: number;         // Product ID
  title: string;       // Product title
  price: number;       // Product price
  category: string;    // Product category
  description: string; // Product description
  images: string[];    // Array of image URLs associated with the product
}
