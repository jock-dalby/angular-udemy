import {
  Directive,
  OnInit,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appUsingHostListener2]'
})
export class UsingHostListener2Directive implements OnInit {

  // As an argument we pass a string to HostBinding specifying which property of the hosting element we want to bind. On the element this directive sits, please access the style property and apply the value of the backgroundColor property in this component. USING HOSTBINDING YOU CAN BIND TO ANY PROPERTY OF THE HOST ELEMENT THE DIRECTIVE IS SITTING ON.
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() {}

  ngOnInit() {
    this.backgroundColor = 'pink';
  }


  // HostListener takes an argument name as an input which represents the event we are listening for. When the 'mouseenter' event occurs the mouseover() method is executed. All the events available with regular event-binding you can also use with HostListener.
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.backgroundColor = 'purple';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'pink';
  }

}
