import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-sign-in',
  templateUrl: './login-sign-in.component.html',
  styleUrls: ['./login-sign-in.component.css'],
})
export class LoginSignInComponent implements OnInit{
  formLogin!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: this.fb.control(''),
      password: this.fb.control(''),
    });
  }
  handlelogin(): void {
    let email = this.formLogin.value.email;
    let password = this.formLogin.value.password;
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
