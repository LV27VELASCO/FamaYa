import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramFollowersComponent } from './instagram-followers.component';

describe('InstagramFollowersComponent', () => {
  let component: InstagramFollowersComponent;
  let fixture: ComponentFixture<InstagramFollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramFollowersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
