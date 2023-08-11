import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  // Transform function that calculates the total price and formats it as a custom currency string
  transform(items: any[]): string {
    // Calculate the total price by iterating over items and summing up price * quantity
    const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

    // Format the total price as a custom currency string with two decimal places
    return `$${totalPrice.toFixed(2)}`;
  }
}
