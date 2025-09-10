import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CalendarProps } from 'src/types/Calendar';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.css']
})
export class CalendarCardComponent implements OnChanges {
  @Input() events: CalendarProps[] = []
  @Input() isLoading: boolean = false;

  page: number = 1;
  itemsPerPage: number = 3;
  perPageOptions: number[] = [3, 6, 9, 12]
  paginatedEvents: CalendarProps[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['events']) {
      this.updatePagination();
    }
  }

  updatePagination() {
    const start = (this.page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedEvents = this.events.slice(start, end);
  }

  totalPages() {
    return Math.ceil(this.events.length / this.itemsPerPage);
  }

  openPage(page: number) {
    if (page < 1 || page > this.totalPages()) return;
    this.page = page;
    this.updatePagination();
  }

  changeViewMode() {
    this.page = 1;
    this.updatePagination();
  }
}
