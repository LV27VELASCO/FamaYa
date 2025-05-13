import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiktokViewsComponent } from './tiktok-views.component';

describe('TiktokViewsComponent', () => {
  let component: TiktokViewsComponent;
  let fixture: ComponentFixture<TiktokViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiktokViewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiktokViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
