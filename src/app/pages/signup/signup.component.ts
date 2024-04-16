import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {User} from "../../shared/models/User";
import {UserService} from "../../shared/services/user/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  constructor(private authService: AuthService, private userService: UserService) {
  }

  signUpForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  onSubmit() {
    console.log(this.signUpForm.value);
    this.authService.signup(this.signUpForm.get('email')?.value as string, this.signUpForm.get('password')?.value as string)
      .then((res) => {
        console.log('AUTH: Signup successful', res);
        const user: User = {
          id: res.user?.uid as string,
          username: this.signUpForm.get('username')?.value as string,
          email: this.signUpForm.get('email')?.value as string,
        }
        this.userService.create(user)
          .then(() => {
            console.log('User added to DB', user);
          })
          .catch((err) => {
            console.log('User NOT added to DB', err);
          });

        localStorage.setItem('user', JSON.stringify(user));
      })
      .catch((err) => {
        console.log('AUTH: Signup failed', err);
      });
  }

}
