import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnFbComponent } from './learn-fb.component';

describe('LearnFbComponent', () => {
  let component: LearnFbComponent;
  let fixture: ComponentFixture<LearnFbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnFbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
