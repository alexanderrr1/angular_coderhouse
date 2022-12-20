import {Directive, ElementRef, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appTamanioFuente]'
})
export class TamanioFuenteDirective implements OnInit {

  constructor(private elemento:ElementRef) {}

  ngOnInit(): void {
    this.elemento.nativeElement.style.fontSize = "20px";
  }

}
