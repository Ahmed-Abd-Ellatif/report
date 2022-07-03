import { Component, OnInit } from '@angular/core';
import { DataServicesService } from 'src/app/services/data-services.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
copyUrl=window.location.href;
pdfUrl:any;
  constructor(private dataSer:DataServicesService) { }
  copy(input:any){
    input.select();
    document.execCommand('copy');
    input.setSelectRange(0,0)
  }
  ngOnInit(): void {
    this.dataSer.getData().subscribe(allData=>{
      this.pdfUrl = allData.data.report;
    })
  }


}
