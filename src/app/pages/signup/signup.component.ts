import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
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

  passwordMatchValidator(control:AbstractControl) : ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : {passwordMismatch: true};
  }

  signUpForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    confirmPassword: new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
  }, {validators: this.passwordMatchValidator});



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
        this.userService.setSignedInUser(res.user?.uid as string);
      })
      .catch((err) => {
        console.log('AUTH: Signup failed', err);
      });
  }


}
