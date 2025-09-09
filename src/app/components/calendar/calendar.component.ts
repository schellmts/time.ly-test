import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  events$: Observable<any[]>;

  constructor(private calendarService: CalendarService) {
    this.events$ = this.calendarService.fetchAllEvents();
    this.events$.subscribe(event => {
      console.log(event)
    })
  }

}
