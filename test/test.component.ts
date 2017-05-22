import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {
  language = 'html';
  property = 'my initiated property';
  example = '<p>example {{property}}</p>'
  constructor() { }

  ngOnInit() {
  }
}
