import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReportSetComponent } from './create-report-set.component';

describe('CreateReportSetComponent', () => {
  let component: CreateReportSetComponent;
  let fixture: ComponentFixture<CreateReportSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReportSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReportSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
