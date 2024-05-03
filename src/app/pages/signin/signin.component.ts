import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {UserService} from "../../shared/services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-singin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit{

  invalidSignIn = false;

  ngOnInit() {
    this.invalidSignIn = false;
  }

  constructor(private authService: AuthService, private userService: UserService, private router: Router) {
  }


  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });


  onSubmit() {
    this.authService.login(this.signinForm.get('email')?.value as string, this.signinForm.get('password')?.value as string)
      .then((res) => {
        console.log('Login successful');
        this.userService.setSignedInUser(res.user?.uid as string);
        console.log(res);
        this.router.navigate(['/home']);
      })
      .catch(() => {
        console.log('Login failed');
        this.signinForm.reset();
        this.invalidSignIn = true;
      });
  }
}
