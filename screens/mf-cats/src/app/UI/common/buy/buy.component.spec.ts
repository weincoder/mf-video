import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyComponent } from './buy.component';

describe('BuyComponent', () => {
  let component: BuyComponent;
  let fixture: ComponentFixture<BuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
