import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiktokFollowersComponent } from './tiktok-followers.component';

describe('TiktokFollowersComponent', () => {
  let component: TiktokFollowersComponent;
  let fixture: ComponentFixture<TiktokFollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiktokFollowersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiktokFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
