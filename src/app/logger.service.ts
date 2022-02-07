import { Injectable } from '@angular/core';
// injectable since it'll be included in another function, becoming its dependency
@Injectable({ providedIn: 'root' })
export class Logger {
  writeCount(count: number) {
    console.warn(count);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
