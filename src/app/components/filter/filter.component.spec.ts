import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search event when button is clicked', () => {
    spyOn(component.search, 'emit');

    component.keywords = 'Friday';
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    button.click();

    expect(component.search.emit).toHaveBeenCalledWith('Friday');
  })
});
