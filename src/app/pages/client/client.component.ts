import { Component, OnInit } from '@angular/core';
import { DataServicesService } from 'src/app/services/data-services.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private dataSer:DataServicesService) { }
  client:any;
  name:any;
  company:any;
  line1:any;
  state:any;
  country:any;
  ngOnInit(): void {
    this.dataSer.getData().subscribe(allData=>{
      this.client = allData.data.client;
      this.name = allData.data.client.name;
      this.company = allData.data.client.company;
      this.line1 = allData.data.client.address.line1;
      this.state = allData.data.client.address.state;
      this.country = allData.data.client.address.country;
    })
  }

}
