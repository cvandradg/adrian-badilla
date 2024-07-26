import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { Fontawesome } from '@adrianbadilla/shared/classes/fontawesome';

@Component({
  templateUrl: './first-section.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage, MODULES],
})
export class FirstSectionComponent extends Fontawesome {}

describe('FirstSectionComponent', () => {
  let component: FirstSectionComponent;
  let fixture: ComponentFixture<FirstSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
