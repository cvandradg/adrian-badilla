import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyStateMessageComponent } from './empty-state-message.component';

describe('EmptyStateMessageComponent', () => {
  let component: EmptyStateMessageComponent;
  let fixture: ComponentFixture<EmptyStateMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmptyStateMessageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyStateMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
