import { Directive, HostListener, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @HostListener('window:keydown', ['$event']) windowClick($event:KeyboardEvent) {
    switch ($event.key) {
      case 'ArrowUp':
        this.setColor('red');
        break;
      case 'ArrowDown':
        this.setColor('blue');
        break;
      case 'ArrowLeft':
        this.setColor('orange');
        break;
      case 'ArrowRight':
        this.setColor('green');
        break;
      default:
        this.setColor('black');
        break;
    }
  }

  constructor(private el:  ElementRef,private renderer: Renderer2) { }

  private setColor(color : string):void
  {
    this.renderer.setStyle(this.el.nativeElement,'color',color);
  }

}
