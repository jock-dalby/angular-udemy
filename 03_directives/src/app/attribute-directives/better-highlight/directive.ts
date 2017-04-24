import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // Inject renderer of type 'Renderer2'
  constructor(
      private renderer: Renderer2,
      private elementRef: ElementRef
  ) { }

  ngOnInit() {
    // This is a better approach than basic-highlight because Angular is not limited to running in the browser and also works in environments where we may not have access to the DOM (e.g. it also works with service-workers). If we try to change the DOM as we did in basic-highlight by directly accessing the native element you may get an error in some (very rare) circumstances and you probably know before hand whether app is going to be run in the browser, but still it is better practice to use the methods the renderer provides to access the DOM.
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }
}
