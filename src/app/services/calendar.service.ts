import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';
import { CalendarEventsResponse, CalendarInfoResponse, CalendarProps } from 'src/types/Calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private readonly apiKey = environment.apiKey
  private readonly baseUrl = environment.baseApiUrl
  private readonly calendarUrl = environment.calendarUrl

  constructor(private http: HttpClient) { }

  fetchAllEvents(): Observable<CalendarProps[]> {
    return this.getCalendarId().pipe(
      switchMap(calendarId => this.getEvents(calendarId)),
      catchError(this.handleError)
    )
  }

  getCalendarId(): Observable<number> {
    const url = `${this.baseUrl}/calendars/info`;
    const headers = this.createHeaders();
    const params = { url: this.calendarUrl }

    return this.http.get<CalendarInfoResponse>(url, { headers, params }).pipe(
      map(response => response.data.id)
    );
  }

  private getEvents(calendarId: number): Observable<CalendarProps[]> {
    const url = `${this.baseUrl}/calendars/${calendarId}/events`;
    const headers = this.createHeaders();

    return this.http.get<CalendarEventsResponse>(url, { headers }).pipe(
      map(response => response.data.items)
    );
  }

  private createHeaders(): HttpHeaders {
    return new HttpHeaders().set('X-Api-Key', this.apiKey || '');
  }

  private handleError(error: any): Observable<never> {
    console.error("Ocorreu um erro no serviço de calendário:", error);
    return throwError(() => new Error('Não foi possível carregar os eventos do calendário.'));
  }
}
