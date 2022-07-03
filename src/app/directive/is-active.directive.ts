import { Directive, HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appIsActive]'
})
export class IsActiveDirective {

  constructor(private el : ElementRef) { }
  // @HostListener('click')
//   imageChange(){

//    var icons = document.querySelectorAll('.divRed span'); //icon

//    icons.forEach(icon =>{
//     icon.addEventListener('click',function(){
//       icons.forEach(i=> i.classList.remove('active'));
//       icon.classList.toggle('active');
//     });
//   });
  
// }


// downloadAsPdf(){
//   window.onload =function(){
//     document.getElementById('download')?.addEventListener('click',()=>{
//       const allPage = document.getElementById('allPage');
//       console.log(allPage)
//       console.log('123321')
//     })
//   }
// }

}

