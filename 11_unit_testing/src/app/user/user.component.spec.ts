/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserService } from "./user.service";
import { DataService } from "../shared/data.service";

/**** See app.component.html for more infor on testing ****/

describe('Component: User', () => {
  // Declare the module for testing by calling beforeEach and passing it a callback. Testbed is the main testing object that gives us access to all different methods.
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    }); // if not using webpack or any other cli based setup, need to execute '.compileComponents()' here.
  });

  /**** Test a component ***/

  it('should create the app', () => {
    // Create the UserComponent in the testing environment
    let fixture = TestBed.createComponent(UserComponent);
    // Get our app by accessing the debug element (element exposed to us for testing purposes) and access the componentInstance.
    let app = fixture.debugElement.componentInstance;
    // We expect this Component to exist.
    expect(app).toBeTruthy();
  });

  /**** Test a service ***/

  it('should use the user name from the service', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    // Inject an instance of UserService into our component in the testing environment
    let userService = fixture.debugElement.injector.get(UserService);
    // We need to run change detection to update our properties in the components
    fixture.detectChanges();
    // expect the component in our testing environment to match our appComponent
    expect(userService.user.name).toEqual(app.user.name);
  });

  /**** Testing templates ***/

  it('should display the user name if user is logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    // Set isLoggedIn to true in appComponent in testing environment.
    app.isLoggedIn = true;
    fixture.detectChanges();
    // Need to compile our template
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  });

  it('shouldn\'t display the user name if user is not logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
  });

  /**** Testing async operations ***/

  // This test really tests the features of the testing package and not of our app. Just for example purposes to show difference between testing async ops with/without the async wrapper.

  it('shouldn\'t fetch data successfully if not called asynchronously', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    // Fake reaching out to service for data using spyOn(what want to spyOn, which method to spyOn), then chain another method using '.and' and then use '.returnValue'. spyOn means we get informed whenever getDetails is executed, but instead of executing we will return the value we expect to get back from it. This is how we would test an async operation reaching out to a sever, without actually reaching out to a server everytime we run our tests.
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    // Trigger change detection.
    fixture.detectChanges();
    // Expect it to be undefined because we do not expect this test to work.
    expect(app.data).toBe(undefined);
  });

  // The way it should be done (called asynchronously). The async wrapper creates an async testing environment and allows Angular2 to handle them as it would do in a real application context.

  it('should fetch data successfully if called asynchronously', async(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    // whenStable() will execute when all async tests have finished. Then using the .then method, we pass a callback to be called once 'whenStable' is done, and then check that the two values match.
    fixture.whenStable().then(() => {
      expect(app.data).toBe('Data');
    });
  }));

  // An alternative way to test async code. Using fakeAsync() as a wrapper allows us to get rid of the 'whenStable()' function and instead call 'tick()' before running our expect analysis. In a fake asynchronous environment, 'tick()' just means when executed finish all asynchronous tasks now and we should have access to the data. Both are fine, but just two different philosophies.

  it('should fetch data successfully if called asynchronously', fakeAsync(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick();
    expect(app.data).toBe('Data');

  }));
});
