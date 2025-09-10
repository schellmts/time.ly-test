import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { CalendarService } from 'src/app/services/calendar.service';
import { CalendarProps } from 'src/types/Calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  private searchVal = new BehaviorSubject<string>('');
  private allEvents$: Observable<CalendarProps[]> = this.calendarService.fetchAllEvents();
  events$: Observable<CalendarProps[]>;

  constructor(private calendarService: CalendarService) {
    this.events$ = combineLatest([
      this.allEvents$,
      this.searchVal
    ]).pipe(
      map(([events, searchTerm]) => {
        if (!searchTerm) return events;

        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return events.filter(event =>
          event.title.toLowerCase().includes(lowerCaseSearchTerm) ||
          (event.description_short && event.description_short.toLowerCase().includes(lowerCaseSearchTerm))
        );
      })
    );
  }

  handleSearch(keywords: string): void {
    this.searchVal.next(keywords)
  }
}
