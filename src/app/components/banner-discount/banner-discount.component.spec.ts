import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDiscountComponent } from './banner-discount.component';

describe('BannerDiscountComponent', () => {
  let component: BannerDiscountComponent;
  let fixture: ComponentFixture<BannerDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerDiscountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
