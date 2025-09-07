import { Component, OnInit } from '@angular/core';
import { CalendarService } from './services/calendar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'time.ly-test';

  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.calendarService.getCalendarId().subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
