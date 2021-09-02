import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleweconnecttemplatesComponent } from './sampleweconnecttemplates.component';

describe('SampleweconnecttemplatesComponent', () => {
  let component: SampleweconnecttemplatesComponent;
  let fixture: ComponentFixture<SampleweconnecttemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleweconnecttemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleweconnecttemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});