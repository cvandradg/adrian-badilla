import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  BaseComponent,
  MockComponentStore,
} from '@adrianbadilla/shared/classes/tests-helper';
import { provideMockStore } from '@ngrx/store/testing';
import { provideComponentStore } from '@ngrx/component-store';
import { Validators } from '@angular/forms';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, MODULES],
})
export class ProfileComponent extends BaseComponent {
  profileInputForm = this.formBuilder.group({
    age: Validators.required,
    name: Validators.required,
    lastnames: Validators.required,
  });
  loginStore = inject(MockComponentStore);
}
describe('LoginComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileComponent, BrowserAnimationsModule],
      providers: [
        provideMockStore({}),
        provideComponentStore(MockComponentStore),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
