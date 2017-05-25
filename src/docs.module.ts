// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// internal
import { DocsApiComponent } from './api';
import { DocsExampleComponent } from './example';

@NgModule({
  declarations: [
    DocsApiComponent,
    DocsExampleComponent
  ],
  exports: [
    DocsApiComponent,
    DocsExampleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DocsModule { }
