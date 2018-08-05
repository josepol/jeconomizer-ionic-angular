import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmountFormComponent } from './add-amount-form.component';

describe('AddAmountFormComponent', () => {
  let component: AddAmountFormComponent;
  let fixture: ComponentFixture<AddAmountFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAmountFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
