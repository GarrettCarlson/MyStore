import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationItemComponent } from './confirmation-item.component';

describe('ConfirmationItemComponent', () => {
  let component: ConfirmationItemComponent;
  let fixture: ComponentFixture<ConfirmationItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationItemComponent],
    });
    fixture = TestBed.createComponent(ConfirmationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
