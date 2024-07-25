import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstSeccionComponent } from './first-seccion.component';

describe('FirstSeccionComponent', () => {
  let component: FirstSeccionComponent;
  let fixture: ComponentFixture<FirstSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstSeccionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
