import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskReactiveComponent } from './new-task-reactive.component';

describe('NewTaskReactiveComponent', () => {
  let component: NewTaskReactiveComponent;
  let fixture: ComponentFixture<NewTaskReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTaskReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
