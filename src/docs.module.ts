import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import PrismModule from '@ngx-prism/core';

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
    CommonModule,
    MaterialModule,
    PrismModule
  ]
})
export class DocsModule { }
