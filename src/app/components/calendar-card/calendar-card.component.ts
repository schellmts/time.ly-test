import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.css']
})
export class CalendarCardComponent {
  @Input() events: any = []
  @Input() isLoading: boolean = false;
}
