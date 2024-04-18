import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import {MatCard} from "@angular/material/card";
import {MatCalendar} from "@angular/material/datepicker";
import {MatOption, provideNativeDateAdapter} from "@angular/material/core";
import {MatList, MatListItem} from "@angular/material/list";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatSelect} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";


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
    MatList,
    MatOption,
    MatSelect,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatButton
  ]
})
export class BookingModule { }
