import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashButtonsComponent } from './cash-buttons.component';

describe('CashButtonsComponent', () => {
  let component: CashButtonsComponent;
  let fixture: ComponentFixture<CashButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
