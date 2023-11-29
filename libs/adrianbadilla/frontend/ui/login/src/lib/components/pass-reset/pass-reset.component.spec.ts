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
  templateUrl: './pass-reset.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, MODULES],
})
export class PassResetComponent extends BaseComponent {
  passResetStore = inject(MockComponentStore);
}
describe('PassResetComponent', () => {
  let component: PassResetComponent;
  let fixture: ComponentFixture<PassResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassResetComponent],
      providers: [
        provideMockStore({}),
        provideComponentStore(MockComponentStore),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PassResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
