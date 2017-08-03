// external
import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

// internal
import { DocsClass } from './../docs-material.class'; // get default features for component
import template from './docs-material-example.component.html'; // import template from html file

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-docs-example',
  template
})
export class DocsMaterialExampleComponent extends DocsClass implements OnInit {

  @Input('css') public css: string;
  @Input('html') public html: string;
  @Input('title') public title: string;
  @Input('ts') public ts: string;

  constructor() {
    super();
  }

  ngOnInit() { }
}
