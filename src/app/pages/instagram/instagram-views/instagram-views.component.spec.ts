import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramViewsComponent } from './instagram-views.component';

describe('InstagramViewsComponent', () => {
  let component: InstagramViewsComponent;
  let fixture: ComponentFixture<InstagramViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramViewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
