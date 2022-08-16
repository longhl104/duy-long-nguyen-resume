import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyLongNguyenComponent } from './duy-long-nguyen.component';

describe('DuyLongNguyenComponent', () => {
  let component: DuyLongNguyenComponent;
  let fixture: ComponentFixture<DuyLongNguyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuyLongNguyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyLongNguyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
