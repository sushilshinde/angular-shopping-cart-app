import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-filter-card',
    templateUrl: './filtercard.component.html'
})
export class FilterCard {
    @Input() cardTitle: string;        // Title for the filter card
    @Input() filterList: Array<any>;   // List of items for the filter
    @Output() handleOutput: EventEmitter<any> = new EventEmitter(); // Event emitter to output selected items

    selected: Array<any> = []; // Array to store the selected items

    // Handler for checkbox change events
    handleChange(e) {
        if (e.target.checked) {
            this.selected.push(e.target.value); // Add the selected item to the array
        } else {
            this.selected = this.selected.filter(item => item !== e.target.value); // Remove the unselected item from the array
        }
        this.handleOutput.emit(this.selected); // Emit the selected items using the output event
    }
}
