import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedNumbersComponent } from './selected-numbers.component';

describe('SelectedNumbersComponent', () => {
  let component: SelectedNumbersComponent;
  let fixture: ComponentFixture<SelectedNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
