import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramLikesComponent } from './instagram-likes.component';

describe('InstagramLikesComponent', () => {
  let component: InstagramLikesComponent;
  let fixture: ComponentFixture<InstagramLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramLikesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
