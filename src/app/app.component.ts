import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('content' , {static:false}) el!:ElementRef;
  title = 'report';


  // downloadAsPdf(){
  //   let pdf = new jsPDF('p','pt','a4');
  //   pdf.html(this.el.nativeElement,{ 
  //       callback: (pdf)=> {
  //       pdf.save('report.pdf')
  //     }
  //   });
  // }
  downloadAsPdf(){
    html2canvas(document.getElementById('content')!).then(canvas=>{
      const contentDataUrl = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p','mm','a4');
      var width = pdf.internal.pageSize.getWidth();
      var height = canvas.height * width / canvas.width;

      pdf.addImage(contentDataUrl,'PNG' , 0, 0,width,height)
      pdf.save('report.pdf');
    })
  }
  
}
