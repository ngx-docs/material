import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrismModule } from '@ngx-prism/core';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    PrismModule
  ]
})
export class TestModule { }
