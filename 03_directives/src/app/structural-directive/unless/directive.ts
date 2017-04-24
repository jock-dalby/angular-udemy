import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // Use @Input to bind to the property 'appUnless' and use 'set' as a (setter) method of the property which gets executed whenever the value outside of this directive changes. It is important to understand that 'appUnless' is still a property, it is just the setter of the property which is a method. The property therefore needs to receive the condition to evaluate for change as an input, in this case it would be a boolean.

  // NOTE: THE PROPERTY NAME MUST BE THE SAME AS THE SELECTOR NAME! appUnless

  @Input() set appUnless (condition: boolean) {
    if (!condition) {
      // Here we go to the place in the document where the directive is placed, create a new view inside the view container and place the template inside of it.
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // otherwise we call the clear method to remove everything in this place in the DOM.
      this.vcRef.clear();
    }
  }

  constructor(
      // WHAT: Just like elementRef gives us access to the element the directive is on, templateRef gives us access to the chunk of template the directive is on. Any simply tells the templateRef that this is a generic type and can receive any type of syntax.
      private templateRef: TemplateRef<any>,

      // WHERE: ViewContainerRef refers to place where we placed this directive in the document.
      private vcRef: ViewContainerRef

  ) { }

}
