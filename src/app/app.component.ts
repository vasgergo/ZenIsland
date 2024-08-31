import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "./shared/services/user/user.service";
import {user} from "@angular/fire/auth";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'vasgergo-webkert';
  subscription: Subscription = new Subscription();


  constructor(public userService: UserService) {
  }

  ngOnInit() {

  }

  signOut() {
    this.userService.signout();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
