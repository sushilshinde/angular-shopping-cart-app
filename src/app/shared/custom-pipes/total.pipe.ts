// Import necessary modules from Angular
import { PipeTransform, Pipe } from "@angular/core";

// Decorate the class with @Pipe decorator and provide a name for the pipe
@Pipe({
    name: 'cartTotal',
})

// Define the TotalPipe class that implements the PipeTransform interface
export class TotalPipe implements PipeTransform {

    // Implement the transform method required by the PipeTransform interface
    transform(items: any[]): number {
        // Check if the 'items' array is falsy or empty
        if (!items || items.length === 0) {
            return 0; // Return 0 if 'items' is undefined or empty
        }

        // Use the reduce function to calculate the total based on the 'price' property of each item
        return items.reduce((total, item) => total + (item?.price || 0), 0);
    }
}
