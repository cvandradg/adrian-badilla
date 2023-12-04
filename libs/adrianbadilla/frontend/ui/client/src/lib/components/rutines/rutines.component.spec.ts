import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutinesComponent } from './rutines.component';

describe('RutinesComponent', () => {
  let component: RutinesComponent;
  let fixture: ComponentFixture<RutinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RutinesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RutinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
