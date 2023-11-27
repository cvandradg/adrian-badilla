import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusMessageComponent } from './status-message.component';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';

describe('StatusMessageComponent', () => {
  let component: StatusMessageComponent;
  let fixture: ComponentFixture<StatusMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MODULES],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
