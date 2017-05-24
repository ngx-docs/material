import { Component, OnInit } from '@angular/core';

import template from './test.component.html';

@Component({
  selector: 'test-component',
  template
})
export class TestComponent implements OnInit {
  language = 'html';
  property = 'my initiated property';
  example = '<p>example {{property}}</p>'
  constructor() { }

  ngOnInit() {
  }
}
