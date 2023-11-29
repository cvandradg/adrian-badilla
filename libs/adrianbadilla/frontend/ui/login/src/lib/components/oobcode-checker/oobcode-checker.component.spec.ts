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
  templateUrl: './oobcode-checker.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, MODULES],
})
export class OobcodeCheckerComponent extends BaseComponent {
  oobCodeCheckerStore = inject(MockComponentStore);
}
describe('OobcodeCheckerComponent', () => {
  let component: OobcodeCheckerComponent;
  let fixture: ComponentFixture<OobcodeCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OobcodeCheckerComponent],
      providers: [
        provideMockStore({}),
        provideComponentStore(MockComponentStore),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OobcodeCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
