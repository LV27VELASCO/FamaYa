import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCardListComponent } from './service-card-list.component';

describe('ServiceCardListComponent', () => {
  let component: ServiceCardListComponent;
  let fixture: ComponentFixture<ServiceCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
