import { Component, OnInit } from '@angular/core';
import { DataServicesService } from 'src/app/services/data-services.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private dataSer:DataServicesService) { }
dataList:any;
  ngOnInit(): void {
    this.dataSer.getData().subscribe(data=>{
      this.dataList = data;
      console.log(this.dataList.data.id)
    })
  }

}
