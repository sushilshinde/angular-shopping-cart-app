import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-filter-card',
    templateUrl: './filtercard.component.html'
})

export class FilterCard {
    @Input() cardTitle: string;
    @Input() filterList: Array<any>;
    @Output() handleOutput: EventEmitter<any> = new EventEmitter()

    selected: Array<any> = [];

    handleChange(e) {
        if (e.target.checked) {
            this.selected.push(e.target.value)
        }
        else {
            this.selected = this.selected.filter(item => item !== e.target.value)
        }
        this.handleOutput.emit(this.selected)
    }
}