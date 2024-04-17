import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import {MatCard} from "@angular/material/card";
import {MatCalendar} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from "@angular/material/core";
import {MatList, MatListItem} from "@angular/material/list";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatRadioButton} from "@angular/material/radio";


@NgModule({
  declarations: [
    BookingComponent
  ],
  providers: [
    provideNativeDateAdapter()
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MatCard,
    MatCalendar,
    MatListItem,
    MatCheckbox,
    MatList,
    MatRadioButton
  ]
})
export class BookingModule { }
