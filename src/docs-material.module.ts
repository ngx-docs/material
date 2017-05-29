// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { PrismModule } from '@ngx-prism/core';

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
    CommonModule,
    MaterialModule,
    PrismModule
  ]
})
export class DocsMaterialModule { }
