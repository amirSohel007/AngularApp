import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnApiComponent } from './learn-api.component';

describe('LearnApiComponent', () => {
  let component: LearnApiComponent;
  let fixture: ComponentFixture<LearnApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
