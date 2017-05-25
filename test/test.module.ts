// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import PrismModule from '@ngx-prism/core';

// internal
import { DocsModule } from './..';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [
    TestComponent
  ],
  exports: [
    MaterialModule,
    DocsModule
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    DocsModule,
    MaterialModule,
    PrismModule
  ]
})
export class TestModule { }
