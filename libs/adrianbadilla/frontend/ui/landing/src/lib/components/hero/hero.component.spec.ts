import { of } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';
import { Fontawesome } from '@adrianbadilla/shared/classes/fontawesome';

@Component({
  templateUrl: './hero.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage, MODULES],
})
export class HeroComponent extends Fontawesome {}

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { paramMap: of('login') } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
