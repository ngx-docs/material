
// external
import { MaterialModule } from '@angular/material';
import { NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';

import { DocsModule } from './docs.module';
import { DocsApiComponent } from './api';

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

describe('DocsApiComponent', () => {

  let comp: DocsApiComponent;
  let debugElement: any;
  let fixture: ComponentFixture<DocsApiComponent>;
  let nativeElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DocsModule,
        MaterialModule
      ]
    }).compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(DocsApiComponent);

    // get from fixture
    comp = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    debugElement = fixture.debugElement;
  });

  it('should be defined', async(() => {
    expect(fixture).toBeDefined();
    expect(comp).toBeTruthy();
  }));
  it('should have table', async(() => {
    // console.info(nativeElement);
    expect(nativeElement.querySelector('table')).toBeTruthy();
  }));
  it('should have div container', async(() => {
    fixture.detectChanges();

  }));
});
