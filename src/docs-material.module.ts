// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

// @ngx
import { PrismModule } from '@ngx-prism/core';
import { MarkdownModule } from '@ngx-markdown/core';

// internal
import { DocsMaterialApiComponent } from './api';
import { DocsMaterialExampleComponent } from './example';

@NgModule({
  declarations: [
    DocsMaterialApiComponent,
    DocsMaterialExampleComponent
  ],
  exports: [
    DocsMaterialApiComponent,
    DocsMaterialExampleComponent
  ],
  imports: [
    // external
    CommonModule,
    MaterialModule,

    // @ngx
    PrismModule,
    MarkdownModule
  ]
})
export class DocsMaterialModule { }
