import { Component } from '@angular/core';
// this allows to create components

@Component({
  selector: 'hello-world-ngif',
  templateUrl: './hello-world-ngif.component.html',
})
export class HelloWorldNgIfComponent {
  message = "I'm read only!";
  canEdit = false;

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can change me!';
    } else {
      this.message = "I'm immutable!";
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
