import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'cartTotal',
})

export class TotalPipe implements PipeTransform {

    transform(value: any) {
        if (value.length < 1) return 0;
        return value.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.product.price * currentValue.quantity)
        }, 0)
    }
}