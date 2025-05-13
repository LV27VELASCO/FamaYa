import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookFollowersComponent } from './facebook-followers.component';

describe('FacebookFollowersComponent', () => {
  let component: FacebookFollowersComponent;
  let fixture: ComponentFixture<FacebookFollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacebookFollowersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
