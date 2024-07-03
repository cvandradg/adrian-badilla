import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdrianbadillaFrontendLandingComponent } from './adrianbadilla-frontend-landing.component';

describe('AdrianbadillaFrontendLandingComponent', () => {
  let component: AdrianbadillaFrontendLandingComponent;
  let fixture: ComponentFixture<AdrianbadillaFrontendLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdrianbadillaFrontendLandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdrianbadillaFrontendLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
