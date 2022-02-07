import { Component } from '@angular/core';

@Component({
  // an element <hello-world> will be created...
  selector: 'hello-world',
  // ...with this content inside it
  template: `
    <h2>Hello World</h2>
    <p>
    This is my first component!<br>
    Loca
    </p>
  `,
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
