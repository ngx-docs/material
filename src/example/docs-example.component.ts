// angular core
import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

// get default features for component
import { DocsClass } from './../docs.class';
// import template from html file
import template from './docs-example.component.html';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'docs-example',
  template
})
export class DocsExampleComponent extends DocsClass implements OnInit {

  @Input('css') public css: string;
  @Input('html') public html: string;
  @Input('title') public title: string;
  @Input('ts') public ts: string;

  constructor() {
    super();
  }

  ngOnInit() { }
}
