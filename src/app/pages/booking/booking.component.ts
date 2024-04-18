import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../shared/services/user/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit{

  @Input()
  selectedDate: string = '';
  timeOptions:Array<string>= ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  bookingForm = new FormGroup({
    UID: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.bookingForm.get('UID')?.setValue(this.userService.getLoggedInUserId());

    this.route.queryParams.subscribe(params => {
      const type = params['type'];
      this.bookingForm.get('type')?.setValue(type);
    });
  }


  onSubmit() {
    console.log(this.bookingForm.value);
  }

  onDateChange() {
    this.bookingForm.get('date')?.setValue(this.selectedDate);
    console.log(this.selectedDate);
  }
}
