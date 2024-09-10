import { Component, OnDestroy, OnInit } from '@angular/core'
import { BookingService } from '../../shared/services/booking/booking.service'
import { UserService } from '../../shared/services/user/user.service'
import { Subscription } from 'rxjs'
import { Booking } from '../../shared/models/Booking'
import { MatSelect } from '@angular/material/select'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
   selector: 'app-my-bookings',
   templateUrl: './my-bookings.component.html',
   styleUrl: './my-bookings.component.scss',
})
export class MyBookingsComponent implements OnInit, OnDestroy {
   private bookingsSubscription: Subscription | undefined

   bookings: Booking[] = []
   displayedColumns: string[] = ['type', 'date', 'time', 'delete']

   massageTypes: string[] = ['Aromatherapy', 'Couples', 'Thai']

   constructor(
      private bookingService: BookingService,
      private userService: UserService,
      private snackBar: MatSnackBar
   ) {}

   ngOnInit() {
      this.bookingsSubscription = this.bookingService.getAllByUID(this.userService.getSignedInUserId() as string).subscribe((bookings) => {
         this.bookings = bookings
      })
   }

   ngOnDestroy() {
      this.bookingsSubscription?.unsubscribe()
   }

   deleteBooking(id: string) {
      this.bookingService.delete(id).then(() => {
         this.bookings = this.bookings.filter((booking) => booking.id !== id)
      })
   }

   massageTypeChange(selectValue: MatSelect, booking: Booking) {
      console.log(selectValue.value, booking.id)
      this.bookingService.updateType(booking.id, selectValue.value).then(() => {
         this.snackBar.open('Massage type changed successfully', 'Close', {
            duration: 5000, // Set duration to 3 seconds
         })
      })
   }
}
