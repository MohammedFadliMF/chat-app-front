import { Component } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  updateUser!: boolean;
  constructor() {}

  profileImageUrl =
    'https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load';
  coverImageUrl =
    'https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  follow() {
    // Add follow logic here
    console.log('Follow button clicked');
  }
  update() {
    // if(this.updateUser=false){
    this.updateUser=true;
    console.log("function update = "+this.updateUser);
  // }
  }
  deleteupdate() {
    this.updateUser=false;
    console.log('function delete update = ' + this.updateUser);

  }
}
