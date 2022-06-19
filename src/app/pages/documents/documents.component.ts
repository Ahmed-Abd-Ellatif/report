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
      color:'#0078d4'
    },
    {
      name:"2018 Mercedes-Benz C63 S",
      title:"Port Stamp Dock Receipt",
      icon:'assets/images/DRred.png',
      image:'assets/images/downloadBlue.png',
      color:'#d13438'
    },
    {
      name:"2018 Mercedes-Benz C63 S",
      title:"Title File",
      icon:'assets/images/Tgreen.png',
      image:'assets/images/downloadBlue.png',
      color:'#498205'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
