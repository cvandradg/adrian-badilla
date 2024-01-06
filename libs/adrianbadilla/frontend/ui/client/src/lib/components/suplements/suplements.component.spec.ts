import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuplementsComponent } from './suplements.component';

describe('SuplementsComponent', () => {
  let component: SuplementsComponent;
  let fixture: ComponentFixture<SuplementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuplementsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SuplementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
