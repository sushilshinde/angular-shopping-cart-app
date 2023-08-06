export interface CartModel {
    cartItem?: {
        productId: number,
        quantity: number,
        productName: string,
        price: number
    }[],
    error?: string
}