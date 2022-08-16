import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaiYenNgoComponent } from './hai-yen-ngo.component';

describe('HaiYenNgoComponent', () => {
  let component: HaiYenNgoComponent;
  let fixture: ComponentFixture<HaiYenNgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaiYenNgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaiYenNgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
