import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgModel, Validators} from "@angular/forms";
import {UserService} from "../../shared/services/user/user.service";
import {ActivatedRoute} from "@angular/router";
import {BookingService} from "../../shared/services/booking/booking.service";
import {Booking} from "../../shared/models/Booking";
import {CustomDatePipe} from "../../shared/pipes/custom-date.pipe";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
  providers: [CustomDatePipe]
})
export class BookingComponent implements OnInit, OnDestroy {

  readonly possibleTimeOptions: Array<string> = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

  @Input()
  selectedDate: string = '';
  availableTimeOptions: Array<string> = this.possibleTimeOptions;
  private subscription: Subscription = new Subscription();

  constructor(private userService: UserService, private route: ActivatedRoute, private bookingService: BookingService, private datePipe: CustomDatePipe) {
  }

  bookingForm = new FormGroup({
    UID: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.bookingForm.get('time')?.disable();
    this.bookingForm.get('UID')?.setValue(this.userService.getLoggedInUserId());


    this.route.queryParams.subscribe(params => {
      const type = params['type'];
      this.bookingForm.get('type')?.setValue(type);
    });
  }

  ngOnDestroy() {
    console.log('destroy');
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const booking: Booking = {
      id: this.bookingService.createId(),
      UID: this.bookingForm.get('UID')?.value as string,
      type: this.bookingForm.get('type')?.value as string,
      date: this.bookingForm.get('date')?.value as string,
      time: this.bookingForm.get('time')?.value as string,
    };
    console.log(booking);


    this.bookingService.create(booking).then(r => {
      console.log('Booking created', r);
    });
  }

  onDateChange() {
    this.subscription.unsubscribe();

    this.bookingForm.get('time')?.enable();
    this.bookingForm.get('date')?.setValue(this.datePipe.transform(this.selectedDate));
    console.log("selected date: ", this.selectedDate);

    this.subscription = this.bookingService.getBookingByDate(this.bookingForm.get('date')?.value as string).subscribe(bookings => {
      this.updateTimeOptions(bookings);
    });
  }

  updateTimeOptions(bookings: Array<Booking>) {
    this.availableTimeOptions = this.possibleTimeOptions.filter(time => {
      return !bookings.some(booking => booking.time === time);
    });
  }
}

