import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUsingHostListener]'
})
export class UsingHostListenerDirective implements OnInit {

  constructor(
      private renderer: Renderer2,
      private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
  }


  // HostListener takes an argument name as an input which represents the event we are listening for. When the 'mouseenter' event occurs the mouseover() method is executed. All the events available with regular event-binding you can also use with HostListener.
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'purple');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
  }

}
