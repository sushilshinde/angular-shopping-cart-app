import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterCard } from './filtercard.component';

describe('FilterCard', () => {
  let component: FilterCard;
  let fixture: ComponentFixture<FilterCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterCard],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCard);
    component = fixture.componentInstance;
    component.cardTitle = 'Test Card';
    component.filterList = [
      { name: 'Item 1', value: 'item1' },
      { name: 'Item 2', value: 'item2' },
      { name: 'Item 3', value: 'item3' },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selected values when checkbox is checked', () => {
    spyOn(component.handleOutput, 'emit');
    const checkbox = fixture.nativeElement.querySelector('input[type="checkbox"]');
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.selected).toContain('item1');
    expect(component.handleOutput.emit).toHaveBeenCalledWith(['item1']);
  });

  it('should emit updated selected values when checkbox is unchecked', () => {
    component.selected = ['item1', 'item2'];
    spyOn(component.handleOutput, 'emit');
    const checkbox = fixture.nativeElement.querySelector('input[type="checkbox"]');
    checkbox.checked = false;
    checkbox.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.selected).not.toContain('item1');
    expect(component.handleOutput.emit).toHaveBeenCalledWith(['item2']);
  });

  it('should render filter list items', () => {
    const labels = fixture.nativeElement.querySelectorAll('label');
    expect(labels.length).toBe(component.filterList.length);

    component.filterList.forEach((item, index) => {
      expect(labels[index].textContent).toContain(item.name);
    });
  });
});
