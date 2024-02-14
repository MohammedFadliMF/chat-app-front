import { Component } from '@angular/core';

@Component({
  selector: 'app-dataposted',
  templateUrl: './dataposted.component.html',
  styleUrls: ['./dataposted.component.css'],
})
export class DatapostedComponent {
  createpost!: boolean;
  constructor() {}
  createPost() {
    // if(this.updateUser=false){
    this.createpost = true;
    console.log('function createpost = ' + this.createpost);
    // }
  }
  dcreatePost() {
    this.createpost = false;
    console.log('function dcreatePost = ' + this.createpost);
  }
}
