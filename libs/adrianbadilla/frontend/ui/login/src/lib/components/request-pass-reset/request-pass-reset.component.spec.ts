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
  templateUrl: './request-pass-reset.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, MODULES],
})
export class RequestPassResetComponent extends BaseComponent {
  requestPassResetStore = inject(MockComponentStore);
}
describe('RequestPassResetComponent', () => {
  let component: RequestPassResetComponent;
  let fixture: ComponentFixture<RequestPassResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestPassResetComponent],
      providers: [
        provideMockStore({}),
        provideComponentStore(MockComponentStore),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestPassResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
