import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authService: AuthService) {
  }


  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });


  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.get('email')?.value as string, this.loginForm.get('password')?.value as string)
      .then((res) => {
        console.log('Login successful');
        console.log(res);
      })
      .catch(() => {
        console.log('Login failed');
      });
  }
}
