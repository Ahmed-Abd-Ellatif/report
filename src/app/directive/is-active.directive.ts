import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appIsActive]'
})
export class IsActiveDirective {

  constructor() { }
  @HostListener('click')
  imageChange(){
   
   var icons = document.querySelectorAll('.icon');

   icons.forEach(icon =>{
    icon.addEventListener('click',function(){
      icons.forEach(i=> i.classList.remove('active'));
      icon.classList.add('active');
      // document.getElementById("pp")?.style.display?'unset';
    });
  });
  
}

}

