import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiktokLikesComponent } from './tiktok-likes.component';

describe('TiktokLikesComponent', () => {
  let component: TiktokLikesComponent;
  let fixture: ComponentFixture<TiktokLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiktokLikesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiktokLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
