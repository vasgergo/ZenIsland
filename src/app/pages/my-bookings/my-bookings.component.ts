import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookingService} from "../../shared/services/booking/booking.service";
import {UserService} from "../../shared/services/user/user.service";
import {Subscription} from "rxjs";
import {Booking} from "../../shared/models/Booking";

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.scss'
})
export class MyBookingsComponent implements OnInit, OnDestroy {

  private subscription: Subscription | undefined;
  bookings: Booking[] = [];
  displayedColumns: string[] = ['type', 'date', 'time', 'delete'];

  constructor(private bookingService: BookingService, private userService: UserService) {
  }

  ngOnInit() {
    this.subscription = this.bookingService.getAllByUID(this.userService.getSignedInUserId() as string).subscribe(bookings => {
      this.bookings = bookings;
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  deleteBooking(id: string) {
    this.bookingService.delete(id).then(() => {
      this.bookings = this.bookings.filter(booking => booking.id !== id);
    });
  }
}
