import { OnInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]',
})

export class BasicHighlightDirective implements OnInit {

    // When constructor creates an instance of this class we can pass arguments to tell Angular what in particular we would like access to. In this case we are getting hold of the element we are binding this directive to using the 'ElementRef' type and naming it 'ElementRef' but can be called anything you like. To be able to use this data everywhere in the class, we use a TS shortcut by adding 'private' which will make this both a property of this class (property ElementRef) and automatically assign the value we are getting from the constructor to this property.
    constructor( private elementRef: ElementRef) {
    }

    ngOnInit() {
        // Here we are getting access to the element our directive was placed on and then overriding the style of this element. This is merely for example purposes and not best practice to directly access your elements for styling. See directive 'better-highlight' for correct practice.
        this.elementRef.nativeElement.style.background = 'red';
    }
}

// Remember to add your directive to you app.module.ts file.