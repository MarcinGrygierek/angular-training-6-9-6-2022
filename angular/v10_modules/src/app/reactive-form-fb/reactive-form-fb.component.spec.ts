import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormFbComponent } from './reactive-form-fb.component';

describe('ReactiveFormFbComponent', () => {
  let component: ReactiveFormFbComponent;
  let fixture: ComponentFixture<ReactiveFormFbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormFbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
