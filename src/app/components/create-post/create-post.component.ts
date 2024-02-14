import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  @Input() createpost!: boolean;

  ngOnInit(): void {
    console.log(this.createpost);
  }
  dupdatePost() {
    this.createpost = false;
    console.log('function dupdatePost = ' + this.createpost);
  }
}
