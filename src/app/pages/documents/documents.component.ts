import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documents=[
    {
      name:"2018 Mercedes-Benz C63 S",
      title:"Dock Receipt",
      icon:'assets/images/DR.png',
      image:'assets/images/downloadBlue.png',
      color:'#0078d4',
      bgc:'#E5F1FB'
    },
    {
      name:"2018 Mercedes-Benz C63 Ss",
      title:"Port Stamp Dock Receipt",
      icon:'assets/images/DRred.png',
      image:'assets/images/downloadBlue.png',
      color:'#d13438',
      bgc:'#F9E9E7'
    },
    {
      name:"2018 Mercedes-Benz C63 Sss",
      title:"Title File",
      icon:'assets/images/Tgreen.png',
      image:'assets/images/downloadBlue.png',
      color:'#498205',
      bgc:'#e6f3e6'
    },
  ];


  showPopup:boolean=false;
pdf:any
  openPopup(docs:any){
    this.showPopup= true
    this.pdf = docs
  }
  closePopup(){
    this.showPopup= false
  }

  constructor() { }

  ngOnInit(): void {
  }


}
