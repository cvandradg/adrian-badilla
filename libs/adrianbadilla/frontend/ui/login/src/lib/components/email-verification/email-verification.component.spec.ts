import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { provideComponentStore } from '@ngrx/component-store';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import {
  BaseComponent,
  MockComponentStore,
} from '@adrianbadilla/shared/classes/tests-helper';

@Component({
  templateUrl: './email-verification.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, MODULES],
})
export class EmailVerificationComponent extends BaseComponent {
  emailVerificationStore = inject(MockComponentStore);
}
describe('EmailVerificationComponent', () => {
  let component: EmailVerificationComponent;
  let fixture: ComponentFixture<EmailVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailVerificationComponent],
      providers: [
        provideMockStore({}),
        provideComponentStore(MockComponentStore),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
