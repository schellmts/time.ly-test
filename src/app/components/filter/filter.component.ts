import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() search = new EventEmitter<string>();

  keywords: string = '';
  startDate: string | null = null;
  endDate: string | null = null;
  updateDate: string | null = null;

  onSearch(): void {
    this.search.emit(this.keywords);
  }
}
