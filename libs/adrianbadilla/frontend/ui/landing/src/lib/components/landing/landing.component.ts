import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MODULES } from '@adrianbadilla/shared/exports/export-modules';

@Component({
  selector: 'adrianbadilla-landing',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MODULES],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {}
