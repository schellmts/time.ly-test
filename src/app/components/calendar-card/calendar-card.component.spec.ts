import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarCardComponent } from './calendar-card.component';
import { FormsModule } from '@angular/forms';

describe('CalendarCardComponent', () => {
  let component: CalendarCardComponent;
  let fixture: ComponentFixture<CalendarCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CalendarCardComponent]
    });
    fixture = TestBed.createComponent(CalendarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call changeViewMode when selecting a new view mode', () => {
    spyOn(component, 'changeViewMode');

    const select: HTMLSelectElement = fixture.nativeElement.querySelector('#itemsPerPage');

    select.value = select.options[1].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.changeViewMode).toHaveBeenCalled();
  });

  it('should call openPage with correct argument when clicking Previous', () => {
    component.page = 2;
    fixture.detectChanges();

    spyOn(component, 'openPage');

    const prevButton: HTMLButtonElement = fixture.nativeElement.querySelector('button:first-of-type');
    prevButton.click();
    fixture.detectChanges();

    expect(component.openPage).toHaveBeenCalledWith(1);
  });

  it('should call openPage with correct argument when clicking Next', () => {
    component.page = 1;
    fixture.detectChanges();

    spyOn(component, 'openPage');

    const nextButton: HTMLButtonElement = fixture.nativeElement.querySelector('button:last-of-type');
    nextButton.click();
    fixture.detectChanges();

    expect(component.openPage).toHaveBeenCalledWith(2);
  });
});
