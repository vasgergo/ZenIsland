import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "./shared/services/user/user.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'vasgergo-webkert';


    constructor(public userService: UserService) {

    }


    ngOnInit() {

    }

    signOut() {
        this.userService.signout();
    }

    ngOnDestroy(): void {
    }
}
