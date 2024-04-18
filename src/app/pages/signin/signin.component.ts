import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {UserService} from "../../shared/services/user/user.service";

@Component({
  selector: 'app-singin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  constructor(private authService: AuthService, private userService: UserService) {
  }


  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });


  onSubmit() {
    console.log(this.signinForm.value);
    this.authService.login(this.signinForm.get('email')?.value as string, this.signinForm.get('password')?.value as string)
      .then((res) => {
        console.log('Login successful');
        this.userService.setSignedInUser(res.user?.uid as string);
        console.log(res);
      })
      .catch(() => {
        console.log('Login failed');
      });
  }
}
