import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherComponent } from './another.component';

describe('AnotherComponent', () => {
  let component: AnotherComponent;
  let fixture: ComponentFixture<AnotherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnotherComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
