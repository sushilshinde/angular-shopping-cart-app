import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterCard } from './filtercard.component';

describe('FilterCard', () => {
  let component: FilterCard;
  let fixture: ComponentFixture<FilterCard>;

  beforeEach(async () => {
    // ConfigureTestingModule is used to set up the testing module environment.
    await TestBed.configureTestingModule({
      declarations: [FilterCard], // Declare the component to be tested.
    }).compileComponents(); // Compile the component and its template.
  });

  beforeEach(() => {
    // Create a component fixture and retrieve the instance of the component.
    fixture = TestBed.createComponent(FilterCard);
    component = fixture.componentInstance;

    // Set initial values for testing.
    component.cardTitle = 'Test Card';
    component.filterList = [
      { name: 'Item 1', value: 'item1' },
      { name: 'Item 2', value: 'item2' },
      { name: 'Item 3', value: 'item3' },
    ];

    // Trigger change detection to update the component with the initial values.
    fixture.detectChanges();
  });

  it('should create', () => {
    // Ensure that the component is created successfully.
    expect(component).toBeTruthy();
  });

  it('should emit selected values when checkbox is checked', () => {
    // Spy on the handleOutput EventEmitter's emit method.
    spyOn(component.handleOutput, 'emit');

    // Access the checkbox element in the fixture and simulate a change event.
    const checkbox = fixture.nativeElement.querySelector('input[type="checkbox"]');
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change'));

    // Trigger change detection to update the component.
    fixture.detectChanges();

    // Ensure that the selected value is emitted correctly.
    expect(component.selected).toContain('item1');
    expect(component.handleOutput.emit).toHaveBeenCalledWith(['item1']);
  });

  it('should emit updated selected values when checkbox is unchecked', () => {
    // Set an initial selected value for testing.
    component.selected = ['item1', 'item2'];

    // Spy on the handleOutput EventEmitter's emit method.
    spyOn(component.handleOutput, 'emit');

    // Access the checkbox element in the fixture and simulate a change event.
    const checkbox = fixture.nativeElement.querySelector('input[type="checkbox"]');
    checkbox.checked = false;
    checkbox.dispatchEvent(new Event('change'));

    // Trigger change detection to update the component.
    fixture.detectChanges();

    // Ensure that the selected value is updated and emitted correctly.
    expect(component.selected).not.toContain('item1');
    expect(component.handleOutput.emit).toHaveBeenCalledWith(['item2']);
  });

  it('should render filter list items', () => {
    // Access all label elements in the fixture.
    const labels = fixture.nativeElement.querySelectorAll('label');

    // Ensure that the correct number of labels is rendered.
    expect(labels.length).toBe(component.filterList.length);

    // Check if each label contains the correct item name from the filter list.
    component.filterList.forEach((item, index) => {
      expect(labels[index].textContent).toContain(item.name);
    });
  });
});
