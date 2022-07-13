import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-damages-overview',
  templateUrl: './damages-overview.component.html',
  styleUrls: ['./damages-overview.component.css']
})
export class DamagesOverviewComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  isActive=false;

  onClick(){
    this.isActive = !this.isActive;
    console.log(this.isActive)
  }

}
