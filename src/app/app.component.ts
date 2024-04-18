import {Component} from '@angular/core';
import {UserService} from "./shared/services/user/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vasgergo-webkert';

  constructor(public userService: UserService) {
  }

  signOut() {
    this.userService.signout();
  }
}
