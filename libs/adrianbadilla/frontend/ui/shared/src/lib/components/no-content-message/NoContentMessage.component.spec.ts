import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoContentMessageComponent } from './NoContentMessage.component';

describe('NoContentMessageComponent', () => {
  let component: NoContentMessageComponent;
  let fixture: ComponentFixture<NoContentMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoContentMessageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoContentMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
