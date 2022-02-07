import { Component } from '@angular/core';

@Component({
  selector: 'hello-world-interpolation',
  // either I add the template like this:
  //template: '<p>Loca</p>'
  // or I can specify the url of the file where the template is defined, like this
  templateUrl: './hello-world-interpolation.component.html',
})
export class HelloWorldInterpolationComponent {
  message = 'Hello, world!';
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
