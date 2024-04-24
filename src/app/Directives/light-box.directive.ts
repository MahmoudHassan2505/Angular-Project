import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {

  @Input()
  defaultColor:string='darkblue';

  @Input()
  HighlightedColor:string='yellow';

  constructor(private element:ElementRef) { 
    this.element.nativeElement.style.border=`10px solid ${this.defaultColor}`;
  }

  @HostListener('mouseover')
  onMouseOver(){
    this.element.nativeElement.style.border=`10px solid ${this.HighlightedColor} `;
  }

  @HostListener('mouseout')
  onMouseOut(){
    this.element.nativeElement.style.border=`10px solid ${this.defaultColor}`;
  }

}
