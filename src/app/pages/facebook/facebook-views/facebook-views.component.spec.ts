import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookViewsComponent } from './facebook-views.component';

describe('FacebookViewsComponent', () => {
  let component: FacebookViewsComponent;
  let fixture: ComponentFixture<FacebookViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacebookViewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
