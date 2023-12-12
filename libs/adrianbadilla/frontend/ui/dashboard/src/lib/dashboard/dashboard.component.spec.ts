import { Component, inject } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { provideComponentStore } from '@ngrx/component-store';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import {
  BaseComponent,
  MockComponentStore,
} from '@adrianbadilla/shared/classes/tests-helper';

@Component({
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [MODULES],
})
export class DashboardComponent extends BaseComponent {
  loginStore = inject(MockComponentStore);
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, DashboardComponent, MODULES],
      providers: [
        provideMockStore({}),
        provideComponentStore(MockComponentStore),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
