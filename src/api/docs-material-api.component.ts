// external
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

// internal
import { DocsMaterialApiInterface } from './docs-material-api.interface'; // import typescript interface
import template from './docs-material-api.component.html'; // import template from html file

/**
 * @export
 * @class DocsMaterialApiComponent
 * @implements {OnInit}
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-docs-api',
  template
})
export class DocsMaterialApiComponent implements OnInit {

  @Input('body') body: Array<DocsMaterialApiInterface>;
  @Input('description') description: string;
  @Input('header') header: Array<string>;
  @Input('title') title: string;

  constructor() { }

  ngOnInit() { }
}
