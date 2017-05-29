import { Component, ElementRef, OnInit, Input, ViewChild } from '@angular/core';

import template from './test.component.html';
// get default features for component
import { DocsClass } from './../src/docs-material.class';

@Component({
  selector: 'test-component',
  template
})
export class TestComponent implements OnInit {

  // docs-example data
  css = `p { text-align: left; }`;
  html = '<p>this is my html</p>';
  title = 'test-title';
  ts = `const property = 'test property';`;

  // docs-api data
  header = ['Name', 'Description'];
  body = {
    output: [
      { name: 'autocomplete', description: 'Autocomplete attribute for html element like input with default value = "off"' }
    ],
    input: [
      { name: '@Input(\'data\') data', description: 'Define all properties with data property' }
    ],
    properties: [
      { name: 'autocomplete', description: 'Autocomplete attribute for html element like input with default value = "off"' },
      { name: 'destroy', description: 'Autocomplete attribute for html element like input with default value = "off"' },
      { name: 'disabled', description: 'Autocomplete attribute for html element like input with default value = "off"' },
      { name: 'element', description: 'Autocomplete attribute for html element like input with default value = "off"' },
      { name: 'key', description: 'Autocomplete attribute for html element like input with default value = "off"' },
      { name: 'max', description: 'Autocomplete attribute for html element like input with default value = "off"' },
      { name: 'min', description: 'Autocomplete attribute for html element like input with default value = "off"' },
      { name: 'maxlength', description: 'Autocomplete attribute for html element like input with default value = "off"' },
      { name: 'minlength', description: 'Autocomplete attribute for html element like input with default value = "off"' },
      { name: 'model', description: 'Autocomplete attribute for html element like input with default value = "off"' },
      { name: 'placeholder', description: 'Autocomplete attribute for html element like input with default value = "off"' },
      { name: 'elementComponent', description: 'property that is assigned when element is found in FormElementService' },
      { name: 'required', description: 'property that is assigned when element is found in FormElementService' },
      { name: 'type', description: 'property that is assigned when element is found in FormElementService' },
      { name: 'viewValue', description: 'property that is assigned when element is found in FormElementService' },
      { name: 'viewValue', description: 'property that is assigned when element is found in FormElementService' }
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }
}
