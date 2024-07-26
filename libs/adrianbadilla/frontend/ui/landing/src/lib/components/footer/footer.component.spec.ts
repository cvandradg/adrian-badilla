import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { Fontawesome } from '@adrianbadilla/shared/classes/fontawesome';

@Component({
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage, MODULES],
})
export class FooterComponent extends Fontawesome {}

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
