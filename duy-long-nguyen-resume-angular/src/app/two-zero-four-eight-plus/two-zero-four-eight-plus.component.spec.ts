import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoZeroFourEightPlusComponent } from './two-zero-four-eight-plus.component';

describe('TwoZeroFourEightPlusComponent', () => {
  let component: TwoZeroFourEightPlusComponent;
  let fixture: ComponentFixture<TwoZeroFourEightPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoZeroFourEightPlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoZeroFourEightPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
