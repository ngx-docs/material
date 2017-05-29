
// external
import { NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';

import PrismModule from '@ngx-prism/core';
import { DocsMaterialExampleComponent } from './docs-material-example.component';

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

describe('DocsExampleComponent', () => {

  let comp: DocsMaterialExampleComponent;
  let debugElement: any;
  let fixture: ComponentFixture<DocsMaterialExampleComponent>;
  let nativeElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DocsMaterialExampleComponent
      ],
      imports: [
        CommonModule,
        MaterialModule,
        PrismModule
      ]
    }).compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(DocsMaterialExampleComponent);

    // get from fixture
    comp = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    debugElement = fixture.debugElement;
  });

  it('should be defined', async(() => {
    expect(fixture).toBeDefined();
    expect(comp).toBeTruthy();
  }));
  it('should have div[class="example-viewer"]', async(() => {
    fixture.detectChanges();
    expect(nativeElement.querySelector('div[class="example-viewer"]')).toBeTruthy();
  }));
  it('should have div[class="example-viewer-title"] in div[class="example-viewer"]', async(() => {
    fixture.detectChanges();
    expect(nativeElement.querySelector('div[class="example-viewer"] > div[class="example-viewer-title"]')).toBeTruthy();
  }));
  it('should have property all @Input `undefined`', async(() => {
    expect(comp.css).not.toBeDefined();
    expect(comp.html).not.toBeDefined();
    expect(comp.title).not.toBeDefined();
    expect(comp.ts).not.toBeDefined();
  }));
  it('should have property `title` defined in component and have visible value in template', async(() => {
    const title = 'title-property';
    comp.title = title;
    fixture.detectChanges();
    expect(nativeElement.innerText).toContain(title);
  }));
});
