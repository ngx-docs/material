import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { DocsApiInterface } from './docs-api.interface';

import template from './docs-api.component.html';

@Component({
  selector: 'docs-api',
  template,
  encapsulation: ViewEncapsulation.None
})
export class DocsApiComponent implements OnInit {

  @Input('body') body: Array<DocsApiInterface>;
  @Input('header') header: Array<string>;
  @Input('title') title: string;

  constructor() { }

  ngOnInit() { }
}
