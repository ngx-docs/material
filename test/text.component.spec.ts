
// external
import { NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';

// internal
import { TestComponent } from './test.component';
import { TestModule } from './test.module';

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
      imports: [TestModule]
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
  it('should have div', async(() => {
    expect(nativeElement.querySelector('div')).toBeTruthy();
  }));
  it('should have div container', async(() => {
    fixture.detectChanges();
    console.info(fixture.debugElement.nativeElement);
    console.info(fixture.nativeElement.querySelector('code').innerText);
    console.info(fixture.nativeElement.querySelector('code').innerHTML);
    // expect(debugElement.query(By.css('div'))).not.toBeNull();
  }));
});
