/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Tests are being run using Karma
// To run tests '$ ng test'

describe('App: CompleteGuideFinalWebpack', () => {

  // beforeEach is run between running each test
  // Testbed => The main Angular2 testing utility object.
  // Here we declare which components we want to have in this testing environment
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
  });

  // Even though all tests are setup one after another, each one is run totally independently of one another

  // Checks to see if App was properly created
  // fixture is the name commonly used for the created component being tested
  // The debug method gives us access to a couple of elements e.g. instance of component
  // Always end 'it' block with 'expect' method. We expect our app to exist.
  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  // When testing what is displayed on template (as opposed to things that exist in the component) you have to fixture.detectChanges(), which triggers change detection manually so that the template gets rendered.

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
