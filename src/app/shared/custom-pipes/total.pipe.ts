import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'cartTotal',
})

export class TotalPipe implements PipeTransform {

    transform(items: any[]): number {
        if (!items || items.length === 0) {
          return 0; // Handle the case when items is undefined or empty
        }
      
        return items.reduce((total, item) => total + (item?.price || 0), 0);
      }
      
}