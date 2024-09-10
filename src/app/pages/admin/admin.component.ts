import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../shared/services/booking/booking.service';
import {
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
  toArray,
  combineLatest,
} from 'rxjs';
import { Booking } from '../../shared/models/Booking';
import { UserService } from '../../shared/services/user/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {}
