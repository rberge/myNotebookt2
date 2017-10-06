import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrHomeComponent } from './mr-home.component';

describe('MrHomeComponent', () => {
  let component: MrHomeComponent;
  let fixture: ComponentFixture<MrHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
