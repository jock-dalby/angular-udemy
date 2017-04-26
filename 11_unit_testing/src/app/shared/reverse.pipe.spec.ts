/* tslint:disable:no-unused-variable */

/**** See app.component.html for more infor on testing ****/

// Test a pipe => Isolated test (doesn't depend on Angular2 or any other pieces of the application).
// It is run completely independently of Angular2.
// Notice we do not import any angular2 testing utilities (Testbed, async etc.).

import { ReversePipe } from "./reverse.pipe";

describe('Pipe: ReversePipe', () => {
  it('should reverse the inputs', () => {
    const reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });

});
