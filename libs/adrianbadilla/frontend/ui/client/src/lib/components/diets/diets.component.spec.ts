import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { COMPONENTS } from '@adrianbadilla/shared/exports/export-components';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '@adrianbadilla/shared/classes/base-component';
import { provideMockStore } from '@ngrx/store/testing';
import { provideComponentStore } from '@ngrx/component-store';
import { MockComponentStore } from '@adrianbadilla/shared/classes/tests-helper';

@Component({
  templateUrl: './diets.component.html',
  standalone: true,
  imports: [CommonModule, COMPONENTS],
})
export class DietsComponent extends BaseComponent { }

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



