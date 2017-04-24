import {
  Directive,
  OnInit,
  Input,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appUsingHostListener3]'
})
export class UsingHostListener3Directive implements OnInit {

  // We can specify our default values but these can be overwritten using attribute property binding, as seen in the template.
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @Input('appUsingHostListener3') highlightColor2: string = 'blue'

  // As an argument we pass a string to HostBinding specifying which property of the hosting element we want to bind. On the element this directive sits, please access the style property and apply the value of the backgroundColor property in this component. USING HOSTBINDING YOU CAN BIND TO ANY PROPERTY OF THE HOST ELEMENT THE DIRECTIVE IS SITTING ON.
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    console.log(this.highlightColor2);
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }

}
