import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushTestComponent } from './push-test.component';

describe('PushTestComponent', () => {
  let component: PushTestComponent;
  let fixture: ComponentFixture<PushTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PushTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
