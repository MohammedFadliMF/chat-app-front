import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  @Input() updateUser!: boolean;

  formupdateuser!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}
  ngOnInit(): void {
    this.formupdateuser = this.fb.group({
      username: this.fb.control(''),
      gender: this.fb.control(''),
      mobile: this.fb.control(''),
      email: this.fb.control(''),
      password: this.fb.control(''),
      bio: this.fb.control(''),
      profile: this.fb.control(''),
      website: this.fb.control(''),
    });
    console.log(this.updateUser);
  }
  demupdate() {
    this.updateUser = false;
    console.log("updateUser= "+this.updateUser);
  }

  handleupdateuser(): void {
    let username = this.formupdateuser.value.username;
    let gender = this.formupdateuser.value.gender;
    let mobile = this.formupdateuser.value.mobile;
    let email = this.formupdateuser.value.email;
    let password = this.formupdateuser.value.password;
    let image = this.formupdateuser.value.profile;
    let bio = this.formupdateuser.value.bio;
    let website = this.formupdateuser.value.password;
    console.log('handleupdateuser');
  }
}
