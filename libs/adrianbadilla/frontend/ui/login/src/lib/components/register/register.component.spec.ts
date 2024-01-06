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
  templateUrl: './register.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, MODULES],
})
export class RegisterComponent extends BaseComponent {
  registerStore = inject(MockComponentStore);
}
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent],
      providers: [
        provideMockStore({}),
        provideComponentStore(MockComponentStore),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
