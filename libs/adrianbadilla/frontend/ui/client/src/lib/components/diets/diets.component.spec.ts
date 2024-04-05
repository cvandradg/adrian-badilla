import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideMockStore } from '@ngrx/store/testing';
import { provideComponentStore } from '@ngrx/component-store';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';
import { BaseComponent } from '@adrianbadilla/shared/classes/base-component';
import { MockComponentStore } from '@adrianbadilla/shared/classes/tests-helper';

@Component({
  selector: 'adrianbadilla-diets-tests',
  templateUrl: './diets.component.html',
  standalone: true,
  imports: [CommonModule, COMPONENTS],
})
export class DietsComponent extends BaseComponent {}

describe('DietsComponent', () => {
  let component: DietsComponent;
  let fixture: ComponentFixture<DietsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietsComponent],
      providers: [
        provideMockStore({}),
        provideComponentStore(MockComponentStore),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DietsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
