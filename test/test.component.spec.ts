
// external
import { NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { MaterialModule } from '@angular/material';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';

// external @ngx-
import PrismModule from '@ngx-prism/core';

// internal
import { TestComponent } from './test.component';
import { DocsMaterialApiComponent, DocsMaterialExampleComponent } from './../src';

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

describe('TestComponent', () => {

  let comp: TestComponent;
  let debugElement: any;
  let fixture: ComponentFixture<TestComponent>;
  let nativeElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DocsMaterialApiComponent,
        DocsMaterialExampleComponent,
        TestComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        PrismModule
      ]
    }).compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);

    // get from fixture
    comp = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    debugElement = fixture.debugElement;
  });

  it('should be defined', async(() => {
    expect(fixture).toBeDefined();
    expect(comp).toBeTruthy();
  }));
  it('should have `docs-api` component defined in template', async(() => {
    expect(nativeElement.querySelector('docs-api')).toBeTruthy();
  }));
  it('should have `docs-example` component defined in template', async(() => {
    expect(nativeElement.querySelector('docs-example')).toBeTruthy();
  }));
  it('should have click to view code and after click prism-highlight defined', async(() => {
    // check view source should be null
    expect(nativeElement.querySelector('div.example-viewer-source')).toBeNull();
    // get viewCode button
    const button = debugElement.query(By.css('button[mdtooltip="View code"]')).nativeElement;
    // click on the button
    button.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      // check view source after click should be defined
      expect(nativeElement.querySelector('div.example-viewer-source')).toBeDefined();
      expect(nativeElement.querySelector('div.example-viewer-source prism-highlight')).toBeDefined();
    });

    console.info(nativeElement);
  }));

});
