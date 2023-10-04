// Import necessary modules from Angular
import { Directive, ElementRef, HostListener } from '@angular/core';

// Decorate the class with @Directive decorator and provide a selector for the directive
@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {

    // Inject the ElementRef to access the element to which the directive is applied
    constructor(private el: ElementRef) { }

    // Use @HostListener to listen for the 'mouseenter' event and call the onMouseEnter method
    @HostListener('mouseenter') onMouseEnter() {
        // Call the highlight method with a specific color when the mouse enters the element
        this.highlight('#D19C97');
    }

    // Use @HostListener to listen for the 'mouseleave' event and call the onMouseLeave method
    @HostListener('mouseleave') onMouseLeave() {
        // Call the highlight method with an empty string to remove the highlighting when the mouse leaves
        this.highlight('');
    }

    // Define a private method to apply the highlight to the element based on the provided color
    private highlight(color: string) {
        // Set the 'color' style property of the element to the provided color
        this.el.nativeElement.style.color = color;
    }

}
