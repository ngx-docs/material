import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { DocsClass } from './../docs.class';

@Component({
  selector: 'docs-example',
  template: require('./docs-example.component.html'),
  encapsulation: ViewEncapsulation.None
})
export class DocsExampleComponent extends DocsClass implements OnInit {

  @Input() public body: string;
  @Input('css') public css: string;
  @Input('data') public data: any;
  @Input('html') public html: string;
  @Input('title') public title: string;
  @Input('ts') public ts: string;

  @ViewChild('body') setBody: ElementRef;

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
