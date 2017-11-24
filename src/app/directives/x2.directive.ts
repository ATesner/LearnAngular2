import { Directive, Input, OnInit, OnDestroy, ElementRef,  } from '@angular/core';

@Directive({
  selector: '[appX2]',
  exportAs: 'ngAppX2'
})
export class X2Directive implements OnInit, OnDestroy {

  @Input('appX2Nombre') appX2: number;
  @Input('appX2Concat') concat: string = "";

  constructor(private elementRef: ElementRef) { 

  }

  ngOnInit() {
    let racineDuComponent=this.elementRef.nativeElement;
    let divs = racineDuComponent.getElementsByTagName("div");

    let cpt: number = 0;
    let interval = setInterval( () => {
      for(let i=0; i<divs.length; i++){
        let element = divs[i];
        element.innerHTML += element.innerHTML + this.concat;
      }
      if(cpt > this.appX2){
        clearInterval(interval);
      }
      cpt++;
    }, 1000)

  }

  ngOnDestroy() {

  }

}
