export interface CartModel {
    cartItem: {
        id: number,
        productName: string,
        quantity: number,
        price: number,
    }[],
    error: string
}