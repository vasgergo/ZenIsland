import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../shared/services/user/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router, private userService: UserService) {
  }

  book(type: string) {
    if (!this.userService.isSignedIn()) {
      this.router.navigate(['/signin']);
      return;
    }
    this.router.navigate(['/booking'], {queryParams: {type: type}});
  }
}
