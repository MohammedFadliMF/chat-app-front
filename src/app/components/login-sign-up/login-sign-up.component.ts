import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-sign-up',
  templateUrl: './login-sign-up.component.html',
  styleUrls: ['./login-sign-up.component.css'],
})
export class LoginSignUpComponent implements OnInit {
  formsignup!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}
  ngOnInit(): void {
    this.formsignup = this.fb.group({
      email: this.fb.control(''),
      password: this.fb.control(''),
    });
  }
  handlesignup(): void {
    let username = this.formsignup.value.username;
    let email = this.formsignup.value.email;
    let gender = this.formsignup.value.gender;
    let password = this.formsignup.value.password;
    this.authService.login(email, password).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
