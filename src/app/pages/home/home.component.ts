import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../shared/services/user/user.service";
import {Massage} from "../../shared/models/Massage";
import {MassageService} from "../../shared/services/massage/massage.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy{

  massages: Massage[] = [];

  massagesSubscription: Subscription | undefined;

  constructor(private router: Router, private massageService: MassageService, private userService: UserService) {
  }

  ngOnInit() {
    this.massageService.getAll().subscribe((data) => {
      this.massages = data;
    });
  }

  ngOnDestroy() {
    if (this.massagesSubscription) {
      this.massagesSubscription.unsubscribe();
    }
  }



  book(type: string) {
    if (!this.userService.isSignedIn()) {
      this.router.navigate(['/signin']);
      return;
    }
    this.router.navigate(['/booking'], {queryParams: {type: type}});
  }
}
