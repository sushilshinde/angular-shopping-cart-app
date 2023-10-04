// Define the structure of the CartModel interface
export interface CartModel {
    // Array of objects representing items in the cart
    cartItem?: {
        productId: number,    // Unique identifier for the product
        quantity: number,     // Quantity of the product in the cart
        productName: string,  // Name of the product
        price: number         // Price of the product
    }[],
    error?: string           // Holds any error information related to the cart
}
