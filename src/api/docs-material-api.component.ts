import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { DocsMaterialApiInterface } from './docs-material-api.interface';

import template from './docs-material-api.component.html';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'docs-api',
  template
})
export class DocsMaterialApiComponent implements OnInit {

  @Input('body') body: Array<DocsMaterialApiInterface>;
  @Input('header') header: Array<string>;
  @Input('title') title: string;

  constructor() { }

  ngOnInit() { }
}
