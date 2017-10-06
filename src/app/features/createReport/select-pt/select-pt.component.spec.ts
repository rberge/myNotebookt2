import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPtComponent } from './select-pt.component';

describe('SelectPtComponent', () => {
  let component: SelectPtComponent;
  let fixture: ComponentFixture<SelectPtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
