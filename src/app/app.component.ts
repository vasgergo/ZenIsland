import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { UserService } from './shared/services/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'vasgergo-webkert';

  isAdmin$: Observable<boolean>;

  constructor(public userService: UserService) {
    this.isAdmin$ = this.userService.isAdmin();
  }

  ngOnInit() {}

  signOut() {
    this.userService.signout();
  }

  ngOnDestroy(): void {}
}
