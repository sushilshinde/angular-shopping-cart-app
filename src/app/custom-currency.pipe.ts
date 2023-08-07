import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(items: any[]): string {
    const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    return `$${totalPrice.toFixed(2)}`;
  }

}
