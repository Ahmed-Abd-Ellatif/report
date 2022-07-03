import { Component, OnInit } from '@angular/core';
  

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  showPopup:boolean=false;
  constructor() { }

openPopup(){
  this.showPopup=true;
}

closePopup(){
  this.showPopup=false;
}

  ngOnInit(): void {}

}
