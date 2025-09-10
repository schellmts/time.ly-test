import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HomepageComponent } from './layout/homepage/homepage.component';
import { CalendarCardComponent } from './components/calendar-card/calendar-card.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { DynamicButtonComponent } from './components/elements/dynamic-button/dynamic-button.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarComponent,
    HomepageComponent,
    CalendarCardComponent,
    LoadingScreenComponent,
    DynamicButtonComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
